"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

#[GET] Listar los user

@api.route('/user', methods=[ 'GET'])
def get_user():

    all_users=User.query.all()
    results= list( map( lambda user:user.serialize(), all_users ))
 
  
    return jsonify( results), 200

    
#[POST] Añadir un nuevo user

@api.route('/user', methods=['POST'])
def add_new_user():

    request_body_user = request.get_json()

    new_user = User(
        id=request_body_user["id"],
        email=request_body_user["email"],
        password=request_body_user["password"],
        username=request_body_user["username"]
       ,
           )
    db.session.add( new_user)
    db.session.commit()

    return jsonify( request_body_user), 200

#[PUT] Editar un user

@api.route('/user/<int:user_id>', methods=['PUT'])
def edit_user(user_id):
    user = User.query.get(user_id)

    data = request.get_json()

    user.email = data.get('email',user.email)
    user.password = data.get('password',user.password)
    user.username = data.get('username',user.username)
    

    db.session.commit()

    response_body = {'message': f"user {user.username} edited successfully."}
    return jsonify(response_body)

    #[DELETE] Eliminar un user

@api.route('/user/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    user = User.query.get(user_id)

    if not user:
        return jsonify({'message': 'User not found'}), 404

    db.session.delete(user)
    db.session.commit()

    return jsonify({'message': f'User with ID {user_id} deleted successfully'}), 200






    

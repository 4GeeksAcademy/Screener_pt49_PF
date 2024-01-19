"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint, make_response
from api.models import db, User, Movie, Comment, Watchlist;
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
# FLASK IMPORT JWT BELOW
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)

# Create a JWTManager instance



@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

#[GET] Listar los users

@api.route('/user', methods=['GET'])
# @jwt_required()
def get_user():

    all_users=User.query.all()
    results= list( map( lambda user:user.serialize(), all_users ))
  
    return jsonify( results), 200

#[GET] Listar un solo user

@api.route('/user/<int:user_id>', methods=['GET'])

def get_a_user(user_id):

    one_user = User.query.filter_by(id=user_id).first()
    return jsonify( one_user.serialize()), 200

    
#[POST] Añadir un nuevo user

@api.route('/user', methods=['POST'])
def add_new_user():

    request_body_user = request.get_json()

    new_user = User(    
        email=request_body_user["email"],
        password=request_body_user["password"],
        username=request_body_user["username"],
        age=request_body_user["age"]       
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
    user.age = data.get('age',user.age)
    

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

#### WATCHLIST  #####

#[GET watchlist de todos los users ] 

@api.route('/watchlist', methods=['GET'])

def get_watchlist():

    watchlist=Watchlist.query.all()
    results= list( map( lambda movie:movie.serialize(), watchlist ))

    return jsonify( results), 200

#[GET watchlist de un  user en particular ] 

@api.route('/watchlist/<int:user_id>', methods=['GET'])

def get_an_user_watchlist(user_id):

   user_watchlist = User.query.filter_by(id=user_id).first()
   return jsonify( user_watchlist.serialize()), 200


#[POST watchlist ] 
    
@api.route('/watchlist', methods=['POST'])
def add_new_watchlist():

    request_body_watchlist = request.get_json()

    new_watchlist = Watchlist(    
        user_id= request_body_watchlist["user_id"],
        movie_id= request_body_watchlist["movie_id"],
            
           )
    db.session.add( new_watchlist)
    db.session.commit()

    return jsonify(request_body_watchlist), 200



#[DELETE watchlist] 






    #[POST] Login de un user

@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user = User.query.filter_by(email=email).first()

    if user is None:
        return jsonify({"msg" : "Incorrect email "}), 401
    if user.password != password:
        return jsonify({"msg": "Incorrect password"}), 401

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)


    
@api.route('/movies', methods=['GET'])
def get_movies():

    movies = Movie.query.all()
    serialized_movies = [movie.serialize() for movie in movies]
    return jsonify(serialized_movies)

@api.route('/movies/<int:movie_id>', methods=['GET'])
def get_all_movies(movie_id):

    one_movie = Movie.query.filter_by(id=movie_id).first()
    return jsonify(one_movie.serialize()), 200




@api.route('/movies', methods=['POST'])
def add_movie_from_api():
    data = request.get_json()

    new_movie = Movie(
        id=data['id'],
        title=data['title'],
        release_date=data['release_date'],
        poster_path=data['poster_path'],
        backdrop_path=data['backdrop_path'],
        overview=data['overview'],
        vote_average=data['vote_average'],
        popularity=data['popularity'],
        adult=data['adult'],
        comedy=data['comedy'],
        couple=data['couple'],
        party=data['party'],
        solitary=data['solitary'],
        action=data['action'],
        drama=data['drama'],
        family=data['family'],
        kids=data['kids'],
        animation=data['animation'],
        violence=data['violence'],
        crime=data['crime'],
        historical=data['historical'],
        science_fiction=data['science_fiction'],
        marathon=data['marathon'],
        happy=data['happy'],
        hard_to_watch=data['hard_to_watch'],
        light_film=data['light_film'],
        motivating=data['motivating'],
        war=data['war'],
        disney=data['disney'],
        suspence=data['suspence'],
        sunday_movie=data['sunday_movie'],
        terror=data['terror'],
        christmas=data['christmas'],
        halloween=data['halloween'],
        white_noise=data['white_noise'],
        plot_twits=data['plot_twits'],
        genre_ids=data['genre_ids'],
        original_language=data['original_language'],
        original_title=data['original_title'],
        video=data['video'],
        vote_count=data['vote_count']
    )

    db.session.add(new_movie)
    db.session.commit()

    response_body = {"msg": f"La película {new_movie.title} se agregó correctamente."}
    return jsonify(response_body)

@api.route('/movies/<int:movie_id>', methods=['DELETE'])
def delete_movie(movie_id):
    movie = Movie.query.get(movie_id)
    print(movie)
    print(movie_id)

    db.session.delete(movie)
    db.session.commit()

    response_body = {"msg": f"La película{movie.title} se eliminó correctamente."}
    return jsonify(response_body)

    

@api.route('/movies/<int:movie_id>', methods=['PUT'])
def edit_movie(movie_id):
    movie = Movie.query.get(movie_id)

    if not movie:
        return jsonify({"error": "Película no encontrada"}), 404

    data = request.get_json()

    movie.title = data.get('title', movie.title)
    movie.release_date = data.get('release_date', movie.release_date)
    movie.poster_path = data.get('poster_path', movie.poster_path)
    movie.backdrop_path = data.get('backdrop_path', movie.backdrop_path)
    movie.overview = data.get('overview', movie.overview)
    movie.vote_average = data.get('vote_average', movie.vote_average)
    movie.popularity = data.get('popularity', movie.popularity)
    movie.adult = data.get('adult', movie.adult)
    movie.comedy = data.get('comedy', movie.comedy)
    movie.couple = data.get('couple', movie.couple)
    movie.party = data.get('party', movie.party)
    movie.solitary = data.get('solitary', movie.solitary)
    movie.action = data.get('action', movie.action)
    movie.drama = data.get('drama', movie.drama)
    movie.family = data.get('family', movie.family)
    movie.kids = data.get('kids', movie.kids)
    movie.animation = data.get('animation', movie.animation)
    movie.violence = data.get('violence', movie.violence)
    movie.crime = data.get('crime', movie.crime)
    movie.historical = data.get('historical', movie.historical)
    movie.science_fiction = data.get('science_fiction', movie.science_fiction)
    movie.marathon = data.get('marathon', movie.marathon)
    movie.happy = data.get('happy', movie.happy)
    movie.hard_to_watch = data.get('hard_to_watch', movie.hard_to_watch)
    movie.light_film = data.get('light_film', movie.light_film)
    movie.motivating = data.get('motivating', movie.motivating)
    movie.war = data.get('war', movie.war)
    movie.disney = data.get('disney', movie.disney)
    movie.suspence = data.get('suspence', movie.suspence)
    movie.sunday_movie = data.get('sunday_movie', movie.sunday_movie)
    movie.terror = data.get('terror', movie.terror)
    movie.christmas = data.get('christmas', movie.christmas)
    movie.halloween = data.get('halloween', movie.halloween)
    movie.white_noise = data.get('white_noise', movie.white_noise)
    movie.plot_twits = data.get('plot_twits', movie.plot_twits)
    movie.genre_ids = data.get('genre_ids', movie.genre_ids)
    movie.original_language = data.get('original_language', movie.original_language)
    movie.original_title = data.get('original_title', movie.original_title)
    movie.video = data.get('video', movie.video)
    movie.vote_count = data.get('vote_count', movie.vote_count)

    db.session.commit()

    response_body = {"msg": f"La película {movie.title} se editó correctamente."}
    return jsonify(response_body)





@api.route('/movies/comment', methods=['POST'])
def addComment():
    actual_comment = request.get_json()['comment_body']
    user_id = request.get_json()['user_id']
    movie_id = request.get_json()['movie_id']
    new_comment = Comment(comment_body=actual_comment, user_id=user_id, movie_id=movie_id)
    db.session.add(new_comment)
    db.session.commit()
    response_body = {'msg': 'Your comment has been posted'}
    return (response_body)

@api.route('/movies/allComments', methods=['GET'])
def getComments():
    allComments = Comment.query.all()
    map_comments = list(map(lambda comment : comment.serialize() ,allComments))
    return jsonify(map_comments), 200


@api.route('/movies/comment/<int:comment_id>', methods=['GET'])
def getSpecificComments(comment_id):
    map_comments = Comment.query.filter_by(id = comment_id).first()
    return jsonify(map_comments.serialize()), 200

@api.route('/movies/comment/<int:comment_id>', methods=['PUT'])
def updateComment(comment_id):
    existingComment = Comment.query.filter_by(id = comment_id).first()
    data = request.get_json()
    existingComment.comment_body = data.get('comment_body', existingComment.comment_body)
    db.session.commit()
    db.session.commit()
    response_body = "Your comment has been modified"
    return jsonify(response_body), 200

@api.route('/movies/comment/<int:comment_id>', methods=['DELETE'])
def deleteSpecificComment(comment_id):
    existingComment = Comment.query.filter_by(id = comment_id).first()
    db.session.delete(existingComment)
    db.session.commit()
    response_body = "Your comment has been deleted"
    return jsonify(response_body), 200






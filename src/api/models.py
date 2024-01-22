from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    username = db.Column(db.String(120), unique=True, nullable=False)
    age = db.Column(db.Integer, unique=False, nullable=False)
    watchlist_entries = db.relationship('Watchlist', backref='user', lazy=True)


    def __repr__(self):
        return f'<User {self.username}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "username": self.username,
            "age": self.age
            # do not serialize the password, its a security breach
        }
    
class Movie(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(300), unique=True, nullable=False)
    release_date = db.Column(db.String(80), unique=False, nullable=False)
    poster_path = db.Column(db.String(3000), unique=False, nullable=False)
    backdrop_path = db.Column(db.String(3000), unique=False, nullable=False)
    overview = db.Column(db.String(3000), unique=False, nullable=False)
    vote_average = db.Column(db.String(3000), nullable=False)
    popularity = db.Column(db.String(3000), nullable=False)
    adult = db.Column(db.Boolean, nullable=False)
    comedy = db.Column(db.Boolean, nullable=False)
    couple = db.Column(db.Boolean, nullable=False)
    party = db.Column(db.Boolean, nullable=False)
    solitary = db.Column(db.Boolean, nullable=False)
    action = db.Column(db.Boolean, nullable=False)
    drama = db.Column(db.Boolean, nullable=False)
    family = db.Column(db.Boolean, nullable=False)
    kids = db.Column(db.Boolean, nullable=False)
    animation = db.Column(db.Boolean, nullable=False)
    violence = db.Column(db.Boolean, nullable=False)
    crime = db.Column(db.Boolean, nullable=False)
    historical = db.Column(db.Boolean, nullable=False)
    science_fiction = db.Column(db.Boolean, nullable=False)
    marathon = db.Column(db.Boolean, nullable=False)
    happy = db.Column(db.Boolean, nullable=False)
    hard_to_watch = db.Column(db.Boolean, nullable=False)
    light_film = db.Column(db.Boolean, nullable=False)
    motivating = db.Column(db.Boolean, nullable=False)
    war = db.Column(db.Boolean, nullable=False)
    disney = db.Column(db.Boolean, nullable=False)
    suspence = db.Column(db.Boolean, nullable=False)
    sunday_movie = db.Column(db.Boolean, nullable=False)
    terror = db.Column(db.Boolean, nullable=False)
    christmas = db.Column(db.Boolean, nullable=False)
    halloween = db.Column(db.Boolean, nullable=False)
    white_noise = db.Column(db.Boolean, nullable=False)
    plot_twits = db.Column(db.Boolean, nullable=False)
    genre_ids = db.Column(db.String(3000), nullable=False)
    original_language = db.Column(db.String(3000), nullable=False)
    original_title = db.Column(db.String(3000), nullable=False)
    video = db.Column(db.Boolean, nullable=False)
    vote_count = db.Column(db.Integer, nullable=False)
    watchlist_entries = db.relationship('Watchlist', backref='movie', lazy=True)

    def __repr__(self):
        return f'<Movie {self.title}>'

    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
            "release_date": self.release_date,
            "poster_path": self.poster_path,
            "backdrop_path": self.backdrop_path,
            "overview": self.overview,
            "vote_average": self.vote_average,
            "popularity": self.popularity,
            "adult": self.adult,
            "comedy": self.comedy,
            "couple": self.couple,
            "party": self.party,
            "solitary": self.solitary,
            "action": self.action,
            "drama": self.drama,
            "family": self.family,
            "kids": self.kids,
            "animation": self.animation,
            "violence": self.violence,
            "crime": self.crime,
            "historical": self.historical,
            "science_fiction": self.science_fiction,
            "marathon": self.marathon,
            "happy": self.happy,
            "hard_to_watch": self.hard_to_watch,
            "light_film": self.light_film,
            "motivating": self.motivating,
            "war": self.war,
            "disney": self.disney,
            "suspence": self.suspence,
            "sunday_movie": self.sunday_movie,
            "terror": self.terror,
            "christmas": self.christmas,
            "halloween": self.halloween,
            "white_noise": self.white_noise,
            "plot_twits": self.plot_twits,
            "genre_ids": self.genre_ids,
            "original_language": self.original_language,
            "original_title": self.original_title,
            "video": self.video,
            "vote_count": self.vote_count,
        }
    
class Comment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    comment_body = db.Column(db.String(250), unique=False, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    movie_id = db.Column(db.Integer, db.ForeignKey('movie.id'), nullable=False)

    user = db.relationship('User', backref=db.backref('comments', lazy=True))
    movie = db.relationship('Movie', backref=db.backref('comments', lazy=True))


    

    def __repr__(self):
        return f'<Comments {self.comment_body}>'

    def serialize(self):
        return {
            "id": self.id,
            "comment_body": self.comment_body,
            "user_id": self.user_id,
            "movie_id": self.movie_id
        }

class Watchlist(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    movie_id = db.Column(db.Integer, db.ForeignKey('movie.id'), nullable=False)

    

    def __repr__(self):
        return f'<watchlist {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "movie_id": self.movie_id
        }


    
class LocalAdmin(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    username = db.Column(db.String(120), unique=True, nullable=False)
   
    def __repr__(self):
        return f'<LocalAdmin {self.username}>'


    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "username": self.username
            # do not serialize the password, its a security breach

        }


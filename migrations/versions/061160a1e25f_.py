"""empty message

Revision ID: 061160a1e25f
Revises: 
Create Date: 2024-01-27 20:15:34.854481

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '061160a1e25f'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('local_admin',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('username', sa.String(length=120), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    op.create_table('movie',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=300), nullable=False),
    sa.Column('release_date', sa.String(length=80), nullable=False),
    sa.Column('poster_path', sa.String(length=3000), nullable=False),
    sa.Column('backdrop_path', sa.String(length=3000), nullable=False),
    sa.Column('overview', sa.String(length=3000), nullable=False),
    sa.Column('vote_average', sa.String(length=3000), nullable=False),
    sa.Column('popularity', sa.String(length=3000), nullable=False),
    sa.Column('adult', sa.Boolean(), nullable=False),
    sa.Column('comedy', sa.Boolean(), nullable=False),
    sa.Column('couple', sa.Boolean(), nullable=False),
    sa.Column('party', sa.Boolean(), nullable=False),
    sa.Column('solitary', sa.Boolean(), nullable=False),
    sa.Column('action', sa.Boolean(), nullable=False),
    sa.Column('drama', sa.Boolean(), nullable=False),
    sa.Column('family', sa.Boolean(), nullable=False),
    sa.Column('kids', sa.Boolean(), nullable=False),
    sa.Column('animation', sa.Boolean(), nullable=False),
    sa.Column('violence', sa.Boolean(), nullable=False),
    sa.Column('crime', sa.Boolean(), nullable=False),
    sa.Column('historical', sa.Boolean(), nullable=False),
    sa.Column('science_fiction', sa.Boolean(), nullable=False),
    sa.Column('marathon', sa.Boolean(), nullable=False),
    sa.Column('happy', sa.Boolean(), nullable=False),
    sa.Column('hard_to_watch', sa.Boolean(), nullable=False),
    sa.Column('light_film', sa.Boolean(), nullable=False),
    sa.Column('motivating', sa.Boolean(), nullable=False),
    sa.Column('war', sa.Boolean(), nullable=False),
    sa.Column('disney', sa.Boolean(), nullable=False),
    sa.Column('suspence', sa.Boolean(), nullable=False),
    sa.Column('sunday_movie', sa.Boolean(), nullable=False),
    sa.Column('terror', sa.Boolean(), nullable=False),
    sa.Column('christmas', sa.Boolean(), nullable=False),
    sa.Column('halloween', sa.Boolean(), nullable=False),
    sa.Column('white_noise', sa.Boolean(), nullable=False),
    sa.Column('plot_twits', sa.Boolean(), nullable=False),
    sa.Column('genre_ids', sa.String(length=3000), nullable=False),
    sa.Column('original_language', sa.String(length=3000), nullable=False),
    sa.Column('original_title', sa.String(length=3000), nullable=False),
    sa.Column('video', sa.Boolean(), nullable=False),
    sa.Column('vote_count', sa.Integer(), nullable=False),
    sa.Column('romantic', sa.Boolean(), nullable=False),
    sa.Column('disney_live', sa.Boolean(), nullable=False),
    sa.Column('new', sa.Boolean(), nullable=False),
    sa.Column('classic', sa.Boolean(), nullable=False),
    sa.Column('children', sa.Boolean(), nullable=False),
    sa.Column('cry', sa.Boolean(), nullable=False),
    sa.Column('live_action', sa.Boolean(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('title')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('username', sa.String(length=120), nullable=False),
    sa.Column('age', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    op.create_table('comment',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('comment_body', sa.String(length=1000), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('movie_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['movie_id'], ['movie.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('watchlist',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('movie_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['movie_id'], ['movie.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('watchlist')
    op.drop_table('comment')
    op.drop_table('user')
    op.drop_table('movie')
    op.drop_table('local_admin')
    # ### end Alembic commands ###

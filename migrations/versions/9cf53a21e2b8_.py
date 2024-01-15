"""empty message

Revision ID: 9cf53a21e2b8
Revises: 4ae2e148227c
Create Date: 2024-01-15 00:04:21.195499

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9cf53a21e2b8'
down_revision = '4ae2e148227c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('movie', schema=None) as batch_op:
        batch_op.add_column(sa.Column('plot_twits', sa.Boolean(), nullable=False))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('movie', schema=None) as batch_op:
        batch_op.drop_column('plot_twits')

    # ### end Alembic commands ###

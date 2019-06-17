from sqlalchemy import *
from sqlalchemy.orm import (
    scoped_session, sessionmaker, relationship, backref)
from sqlalchemy.ext.declarative import declarative_base

# I should go through this and comment what each line is doing
# Because right now I only understand at a really high level what's happening here.

engine = create_engine('postgresql://caesar:EtTuBrute@localhost/ides',
                       convert_unicode=True)
db_session = scoped_session(sessionmaker(autocommit=False,
                                         autoflush=False,
                                         bind=engine))

Base = declarative_base()

Base.query = db_session.query_property()


class User(Base):
    __tablename__ = 'user'
    id = Column(Integer, primary_key=True)
    name = Column(String)


class Task(Base):
    __tablename__ = 'task'
    id = Column(Integer, primary_key=True)
    name = Column(String)
    user_id = Column(Integer, ForeignKey('user.id'))
    user = relationship(
        User,
        backref=backref('tasks',
                        uselist=True,
                        cascade='delete,all')
    )

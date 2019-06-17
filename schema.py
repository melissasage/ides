import graphene
from graphene import relay
from graphene_sqlalchemy import SQLAlchemyObjectType, SQLAlchemyConnectionField
from models import db_session, User as UserModel, Task as TaskModel


class User(SQLAlchemyObjectType):
    class Meta:
        model = UserModel
        interfaces = (relay.node, )


class UserConnection(relay.Connection):
    class Meta:
        node = User


class Task(SQLAlchemyObjectType):
    class Meta:
        model = TaskModel
        interfaces = (relay.Node, )


class TaskConnection(relay.Connection):
    class Meta:
        node = Task


class Query(graphene.ObjectType):
    node = relay.Node.Field()


schema = graphene.Schema(query=Query)

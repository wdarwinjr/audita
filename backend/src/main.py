import os
import sys

# from motor.motor_asyncio import AsyncIOMotorClient, AsyncIOMotorGridFSBucket
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
# from models import *

# Importação de Módulos Python do backend_modules:
current_directory = os.getcwd()
parent_directory = os.path.dirname(current_directory)
grandparent_directory = os.path.dirname(parent_directory)
sys.path.append(grandparent_directory+"/backend_modules")

if "NOIAPATH" in os.environ and os.environ["NOIAPATH"]:
    app = FastAPI()
else:
    app = FastAPI(root_path="/backend")

# app.include_router(XXXRouter, tags=["XXX"], prefix="/xxx")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
async def startup():
    # app.xxx = await get_xxx()
    pass


# @app.on_event("shutdown")
# async def shutdown():
#     app.mongodb_client.close()
# from root import router as ModuleRouter
import pandas as pd 
import numpy as np 
import psycopg2 
import pyrebase
import pandas as pd
from dbs import *
from datetime import datetime

try : 
    firebase = pyrebase.initialize_app(config)
    db =firebase.database()
    conn = psycopg2.connect(f"dbname={db_pos['DB_NAME']} user={db_pos['user']} password={db_pos['password']}")
    cur = conn.cursor()
    query = """INSERT INTO ipond (tanggal,ph,suhu,kekeruhan,keterangan) VALUES (%s,%s,%s,%s,%s)"""
    firebase_data = list(db.child("Prototype").child('test').get().val().values()) # NANTI BENARKAN CHILDNYA TAKUTNYA LANGSUNG PROTOTYPE DAN TEST ATAU NGUBAH NAMANYA.
    for i in firebase_data:
        TIMESTAMP_TEMP = i['Tanggal'] +" "+i['Waktu']
        datetime_convert = datetime.strptime(TIMESTAMP_TEMP,'%A,%d-%B-%Y %H:%M:%S')
        data= (datetime_convert,float(i['ph']),int(i['suhu']),float(i['kekeruhan']),int(i['keterangan']))
        cur.execute(query,data)
        conn.commit()
        print("Record inserted successfully into mobile table")
        
except Exception as error:
    print(error)
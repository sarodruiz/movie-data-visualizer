import pandas as pd

df = pd.read_csv("IMDb movies.csv", encoding="latin-1")
df = df.where(pd.notna(df), None)
df = df.astype(object).where(df.notnull(), None) 

movies = df.to_dict(orient="records")

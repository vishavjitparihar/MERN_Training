# What is MongoDB

MongoDB is a NoSQL database
It is a document database
It is schemaless

MongoDB data is stored in BSON format
BSON is binary representation of JSON
It is very quick to seralize and also it maintains types while being stored in the database

# Pros of MongoDB

1. It is schemaless, which makes it very easy to restructire the format of our collections as we continue
2. Read/write speeds are very quick when performing actions on a single document
3. MongoDB supports embedding documents in other documents(sub-documents). This allows us to get all data at once with one read\
4. Promote the saying "Data that is accessed together should be stored together"


# Cons of MongoDB
 
1. Documents have maximum size of 16 MB
2. This prevents us from storing some data all in one spot. We are forced to reference data
3. MongoDB is good deal slower than traditional SQL when looking up joininh other tables


# Embedding vs Referencing 
- Embedding is storing the content of another document inside of a document
- Referencing is similar to a forgein key in that we point to another document

Pros for Embedding:
- Retrieve/Update all pertinent data in one call to one document (FAST. No lookups, joins are required)

Cons for Embedding:
- 16 MB limit per document (BIG CON)
- Can result in some data redundancy (which is fine. Data redundancy enables Mongo to be quick)
- Could result in more information that needed being sent across the wirewq

Pros for Referencing: 
- Avoid data redundacny (we can achivee normalization)
- Helps avoid 16MB limit
- Smaller document sizes


Cons for Referencing:
- Lookups are SLOW in MongoDB
- If my app heavily requires lookups, SQL will outperform MongoDB

## MongoDB Terminology

SQL vs MongoDB Terms:
- Table -> Collection
- Rows -> Document
- Columns -> Fields
- Join -> Lookup

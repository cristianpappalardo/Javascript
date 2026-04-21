# 03 Remote Factory

This project uses jsonblob as a remote JSON database.

## Data structure choice

To reduce the amount of data modified by each HTTP request:
- One blob stores the factory metadata.
- One blob stores each car.
- The factory blob references cars through their blob IDs in `carBlobIds`.

With this structure, editing one car updates only that car blob.

## Initial JSON files uploaded to jsonblob

These files contain the initial DB state and are included in the [json](json) folder:
- [factory.json](json/factory.json)
- [car-1.json](json/car-1.json)
- [car-2.json](json/car-2.json)
- [car-3.json](json/car-3.json)

## jsonblob links and IDs

Replace placeholders after creating your blobs.

1. Factory blob
- ID: `REPLACE_WITH_FACTORY_BLOB_ID`
- URL: `https://jsonblob.com/REPLACE_WITH_FACTORY_BLOB_ID`

2. Car 1 blob
- ID: `REPLACE_WITH_CAR_1_BLOB_ID`
- URL: `https://jsonblob.com/REPLACE_WITH_CAR_1_BLOB_ID`

3. Car 2 blob
- ID: `REPLACE_WITH_CAR_2_BLOB_ID`
- URL: `https://jsonblob.com/REPLACE_WITH_CAR_2_BLOB_ID`

4. Car 3 blob
- ID: `REPLACE_WITH_CAR_3_BLOB_ID`
- URL: `https://jsonblob.com/REPLACE_WITH_CAR_3_BLOB_ID`

## Configuration

1. Upload all JSON seed files in [json](json) to jsonblob.
2. Update car IDs in [json/factory.json](json/factory.json).
3. Update `FACTORY_BLOB_ID` in [scripts/main.js](scripts/main.js).
4. Open [index.html](index.html) with a local web server.

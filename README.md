## Demonstrate knowledge of NodeJS, a relational database (postgres)

### The problem:
- Write a simple batch job that retrieves a CSV file from a URL, 
which imports orders into a database. 

- Ensure that the customer exists in the database before importing the order, otherwise skip the import for the order.
Language:
- CSV header with a sample input (1 order per line)
- orderId,customerId,item,quantity <br />
  sample-123,customer-321,Flowers,2

#### Tables:
##### Customers
* customerId (String)<br />
* firstName (String)<br />
* lastName (String)<br />

##### Orders
* orderId (String)<br />
* customerId (String)<br />
* item (String)<br />
* quantity (Number)<br />

### Tech stack
* NodeJs
* Knex
* cron
* postgres
* request

#### Reference 
https://www.npmjs.com/package/cron <br />
https://www.npmjs.com/package/request <br />
https://www.mocky.io/ <br />

####Prerequisite to run application
clone repository
install postgres (and may be pgamdin)
run sql given in <br /> src/sql-scripts/script_v1.sql

#### Install
`npm i`

#### Run
 `npm start`
 
 



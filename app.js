const CronJob = require('cron').CronJob;
const csvOrderService = require('./src/services/CSVOrderService');
const csvParser = require('./src/util/csvPraser');
const customerService = require('./src/services/CustomerService');
const orderService = require('./src/services/OrderService');
const {connectionRelease} = require('./src/services/KnexService');

// read csv file every 1 min - 0 */1 * * * *
// read csv file every second
const job = new CronJob('* * * * * *', async () => {
    console.log('Reading csv file');

    //retrieve orders
    const ordersCsv = await csvOrderService.get();
    console.log(ordersCsv);
    let ordersArr;

    //parse cvs to json
    try {
        ordersArr = await csvParser.parse(ordersCsv);
        console.log(`ordersArr : ${ordersArr}`);
    } catch (e) {
        console.error(e);
    }

    ordersArr.shift();
    await updateOrders(ordersArr);

}, null, true);

// shutdown after 10 secs
setTimeout(function () {
    console.log('stopping job....');
    job.stop();
    process.exit(0);
}, 10000);

updateOrders = async (orders) => {
    orders.forEach(async value => {
        //insert the order in table
        try {
            const result = await orderService.insert({
                orderid: value[0],
                customerid: value[1],
                item: value[2],
                quantity: value[3]
            });
        } catch (e) {
            console.error(`Error occured ${e.message}`);
        }
    });

};
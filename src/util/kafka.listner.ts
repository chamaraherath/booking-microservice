import { Kafka } from "kafkajs";

const kafka = new Kafka({
    clientId: 'sample',
    brokers: [`${process.env.KAFKA_BROKER_HOST}:${process.env.KAFKA_BROKER_PORT}`] // replace with the address of your Kafka broker
});


export async function checkKafkaBrokerIsRunning() {
    const admin = kafka.admin();
    try {
        await admin.connect();
        console.log('Kafka broker is running');
    } catch (error) {
        console.error('Unable to connect to Kafka broker:', error);
        throw Error(error);
    } finally {
        await admin.disconnect();
    }
}
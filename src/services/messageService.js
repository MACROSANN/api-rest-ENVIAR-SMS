import twilio from "twilio";

const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
const twilioclient = twilio(twilioAccountSid, twilioAuthToken);

function sendMessage(message, phoneNumber) {
    return twilioclient.messages.create({
        body: message,
        from: twilioPhoneNumber,
        to: phoneNumber
    });
}

export { sendMessage };
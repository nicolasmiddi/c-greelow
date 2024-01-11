class EmailService {
    sendEmail(email, message) {
        
        const final_message = `Dear ${email}: Your message was received: ${message}`;
        console.log(`Email sent to ${email}: ${final_message}`);
        return { status: 'success', email, final_message };
    }
}

module.exports = EmailService;

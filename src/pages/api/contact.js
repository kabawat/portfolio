export default function handler(req, res) {
    if (req.method === "POST") {
        try {
            const { name, email, subject, messages } = req.body;

            // Check if all required fields are present
            if (!name || !email || !subject || !messages) {
                throw new Error('Oops! Looks like you forgot to fill in all the fields. Mind checking again?')
            }

            // Check if email is in proper format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                throw new Error('Hmmm... That email looks a bit fishy. Maybe try again?')
            }

            // If all validations pass, proceed with the operation
            sendNotification('Success', name, req.body, 'success');
            res.status(200).json({ message: 'Hey there! Your message has been successfully submitted. Expect a reply soon! 🚀' });
        } catch (error) {
            // Let's add some humor to the error messages
            const funnyErrorMessages = {
                'All fields are required': 'Hey, you missed something! Fill in all the fields and try again.',
                'Invalid email format': 'Oops! Looks like your email needs some love. Double-check it, please.'
            };
            const errorMessage = funnyErrorMessages[error.message] || 'Uh-oh! Something went wrong. Better luck next time!';

            sendNotification(error, req.body.name, req.body, 'error');
            res.status(500).json({ error: errorMessage });
        }
    } else {
        res.status(403).json({ error: 'Method not allowed' });
    }
}


// Color codes for different types of logs
const colors = {
    error: "#FF0000", // Red
    info: "#0000FF", // Blue
    success: "#008000", // Green
    warning: "#FFA500" // Orange
};

function sendNotification(error, client, payload, type = 'success') {
    const color = colors[type] || colors.error; // Default to error color if type is not recognized
    var message = "";
    if (error != null && error != undefined) {
        if (typeof (error) === 'string') {
            // message += "```\n" + error + "\n```";
        } else {
            message += "```\n" + error.message + "\n```";
            message += "\n*Traceback* : \n";
            message += "```\n" + error.stack + "\n```";
        }
    }
    const formattedMessage = {
        attachments: [
            {
                title: message,
                color: color,
                fields: [
                    {
                        title: "Client Name",
                        value: "```\n" + client + "\n```",
                        short: false
                    },
                    {
                        title: "Contact details",
                        value: "```\n" + JSON.stringify(payload, null, 2) + "\n```",
                        short: false
                    }
                ]
            }
        ]
    };

    const headers = { "Content-Type": "application/json" };

    fetch('https://hooks.slack.com/services/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', {
        method: "POST",
        headers: headers,
        body: JSON.stringify(formattedMessage),
    }).then((response) => {
        if (!response.ok) {
            console.error(`Failed to send ${type} notification. Status code: ${response.status}`);
        } else {
            console.log(`${type} notification sent successfully.`);
            console.log("Response:", response.text());
        }
    }).catch((error) => {
        console.error(`Error sending ${type} notification:`, error);
    });
}
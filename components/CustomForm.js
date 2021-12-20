import React, {useState} from 'react';

const CustomForm = ({ status, message, onValidated }) => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [subscribeTo, setSubscribeTo] = useState('');
    const [subscriberType, setSubscriberType] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onValidated({
            EMAIL: email,
            MERGE1: name,
            MERGE2: subscribeTo,
            MERGE3: subscriberType,
        });
    }

    return (

        <form
            className="mc__form"
            onSubmit={(e) => handleSubmit(e)}
        >
            <h3 className="mc__title">Join our email list for future updates.</h3>

            {status === "sending" && (
                <div className="mc__alert mc__alert--sending">
                    sending...
                </div>
            )}
            {status === "error" && (
                <div
                    className="mc__alert mc__alert--error"
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
            {status === "success" && (
                <div
                    className="mc__alert mc__alert--success"
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}

            <div className="mc__field-container">
                <input
                    label="Name"
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    value={name}
                    placeholder="Firstname Lastname"
                />

                <input
                    label="Subscribe to"
                    onChange={(e) => setSubscribeTo(e.target.value)}
                    type="text"
                    value={subscribeTo}
                    placeholder="Subscribe to"
                />

                <input
                    label="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    value={email}
                    placeholder="your@email.com"
                />
                <input
                    label="Subscriber Type"
                    onChange={(e) => setSubscriberType(e.target.value)}
                    type="text"
                    value={subscriberType}
                    placeholder="Priority Pass or Non Priority Pass"
                />

            </div>

            <input
                value="subscribe"
                type="submit"
            />
        </form>
    );
};

export default CustomForm
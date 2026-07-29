import { useState } from 'react';

const UserRegistration = () => {

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess(false);

        if (!formData.username || !formData.email || !formData.email) {
            setError("All fields are required.");
            return;
        }
        if (formData.password.length < 8) {
            setError("Password must be at least 8 characters long");
            return;
        }

        try {
            const response = await fetch("http//localhost:5000/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Registration failed.");
            }
            setSuccess(true);
            setFormData({ username: "", email: "", password: ""}); //Reset Form
        } catch(error) {
            setError(error.message);
        }
    }
        return (
            <div style={{ maxWidth: "400px", margin: "20px auto" }}>
                <h2>Create an Account</h2>
                {error && <p style={{ color: "red" }}>{error}</p>}
                {success && <p style={{ color: "green"}}>Registration successful!</p>}

                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Username</label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            />
                    </div>
                    <div>
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            /> 
                    </div>
                    <div>
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            />
                    </div>
                    <button type="submit" style={ {margin: "10px" }}>Register</button>

                </form>
            </div>
        );
}

export default UserRegistration;
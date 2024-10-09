import React, { useState } from 'react';

function BookNow() 
{
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        destination: '',
        date: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send data to backend
        fetch('http://localhost:3000/api/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            alert('Booking confirmed!');
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Booking failed.');
        });
    };

    return (

        <div className="bg-image" 
            style={{ 
                backgroundImage: "url('https://img.freepik.com/premium-photo/soft-blur-nature-background-abstract-modern-website-graphics-with-smooth-gradient-background_532332-40.jpg')", 
                backgroundRepeat: "no-repeat",
                backgroundSize:"100% 100%",
                height: "100vh" 
            }}>
                <div className='bg-image'
                     style={{
                        backgroundImage: "url('https://media.istockphoto.com/id/1097481110/photo/passenger-plane-business-trip-travel-concept-flying-evening-sunset.jpg?s=612x612&w=0&k=20&c=f2itQWoW1ObaBI0wCQsaT2s7cpo5a_CIqEQItDW8g90=')", 
                        backgroundRepeat: "no-repeat",
                        backgroundSize:"100% 100%",
                        height: "40vh"
                     }}
                >
                    <h1 className='text-center me-1'>
                        <b>Arrived</b>
                    </h1><p className='text-center fs-4 me-1'><i>Unlock the best in Travel!</i></p>
                </div>
            <div className="container">
                <h1 className="text-center"><b>Book Your Destination</b></h1>
                <form className="mt-4" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Full Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            placeholder='Please Enter Your Full Name'
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder='Please Enter Your E-mail'
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Destination</label>
                        <input
                            type="text"
                            className="form-control"
                            name="destination"
                            placeholder='Please Enter Your Dream Place'
                            value={formData.destination}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Travel Date</label>
                        <input
                            type="date"
                            className="form-control"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                        />
                    </div><br/>
                    <button type="submit" className="btn btn-outline-secondary text-light">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default BookNow;
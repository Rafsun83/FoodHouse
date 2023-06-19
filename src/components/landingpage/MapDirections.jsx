import React, { useState } from 'react';
import { DirectionsRenderer, GoogleMap, LoadScript, DirectionsService } from '@react-google-maps/api';
import { Stack } from '@mui/material';

const location = {
    lat: 23.791599,
    lng: 90.389099
};

const MapDirections = () => {
    const [response, setResponse] = useState(null)

    const directionsCallback = res => {
        if (res != null) {
            setResponse(res)
        }
    }
    return (
        <Stack className='map'>
            <LoadScript

                googleMapsApiKey="AIzaSyC6RzK41KFfozmEtKGoFzQw2sclzW8I7Zg"
            >
                <GoogleMap

                    // required
                    id='direction-example'
                    // required
                    mapContainerStyle={{
                        height: '410px',
                        width: '100%'
                    }}

                    // required
                    zoom={10}
                    // required
                    center={location}

                >

                    <DirectionsService
                        // required
                        options={{
                            destination: "Mirpur-1,Dhaka",
                            origin: "Mirpur-10, Dhaka",
                            travelMode: "DRIVING"
                        }}
                        // required
                        callback={directionsCallback}

                    />


                    {
                        response !== null && (
                            <DirectionsRenderer
                                // required
                                options={{
                                    directions: response
                                }}

                            />
                        )
                    }
                </GoogleMap>

            </LoadScript>
        </Stack>
    );
};

export default MapDirections;
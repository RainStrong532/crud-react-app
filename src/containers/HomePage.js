import React from 'react';
import '../styles/HomePage.css'

export default function HomePageContainer(){
    return(
        <div>
            <h2 className="title">Trang chủ</h2>
            <h5>
                <a href="/profiles">
                    Go to list profile
                </a>
            </h5>
        </div>
    )
}
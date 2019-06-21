import React from 'react'

const data = [
    'Daily Timeline',
    'Savings & Expenses',
    'Portfolio & Applications',
    'Other importants things like Passport Renewals',
    'SingtelGo Tasks & Ideas'
]

const ThingsToAccomplish = () => <React.Fragment>
    <div className="card card--container">
        <div className="body">
            {data.map((d, i) => <div key={i}>{d}</div>)}
        </div>
    </div>
</React.Fragment>
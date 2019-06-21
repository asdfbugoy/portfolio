import React from 'react'

const data = [
    {
        day: 'Monday',
        hours: [
            {
                hour: '5:00am - 9:00am',
                activities: [
                    'basketball',
                    'bath and preparation',
                    'travel',
                    'plans'
                ]
            },
            {
                hour: '9:00am - 6:00pm',
                activities: [
                    'SingtelGO Task',
                    'Research & Design',
                    'Portfolio',
                    'lunch',
                    'meetings'
                ]
            },
            {
                hour: '6:00pm - 9:00pm',
                activities: [
                    'travel',
                    'dinner'
                ]
            },
            {
                hour: '10:00pm - 6:00am',
                activities: ['sleep']
            }
        ]
    },
    {
        day: 'Tuesday',
        hours: [
            {
                hour: '5:00am - 9:00am',
                activities: [
                    'basketball',
                    'bath and preparation',
                    'travel',
                    'plans'
                ]
            },
            {
                hour: '9:00am - 6:00pm',
                activities: [
                    'SingtelGO Task',
                    'Research & Design',
                    'Portfolio',
                    'lunch',
                    'meetings'
                ]
            },
            {
                hour: '6:00pm - 10:45pm',
                activities: [
                    'travel',
                    'gym',
                    'dinner'
                ]
            },
            {
                hour: '10:45pm - 6:45am',
                activities: ['sleep']
            }
        ]
    },
    {
        day: 'Wednesday',
        hours: [
            {
                hour: '6:45am - 9:00am',
                activities: [
                    'bath and preparation',
                    'travel',
                    'plans'
                ]
            },
            {
                hour: '9:00am - 6:00pm',
                activities: [
                    'SingtelGO Task',
                    'Research & Design',
                    'Portfolio',
                    'lunch',
                    'meetings'
                ]
            },
            {
                hour: '6:00pm - 10:45pm',
                activities: [
                    'travel',
                    'gym',
                    'dinner'
                ]
            },
            {
                hour: '10:45pm - 6:45am',
                activities: ['sleep']
            }
        ]
    },
    {
        day: 'Thursday',
        hours: [
            {
                hour: '6:45am - 9:00am',
                activities: [
                    'bath and preparation',
                    'travel',
                    'plans'
                ]
            },
            {
                hour: '9:00am - 6:00pm',
                activities: [
                    'SingtelGO Task',
                    'Research & Design',
                    'Portfolio',
                    'lunch',
                    'meetings'
                ]
            },
            {
                hour: '6:00pm - 10:45pm',
                activities: [
                    'travel',
                    'gym',
                    'dinner'
                ]
            },
            {
                hour: '10:45pm - 6:45am',
                activities: ['sleep']
            }
        ]
    },
    {
        day: 'Friday',
        hours: [
            {
                hour: '6:45am - 9:00am',
                activities: [
                    'bath and preparation',
                    'travel',
                    'plans'
                ]
            },
            {
                hour: '9:00am - 5:30pm',
                activities: [
                    'SingtelGO Task',
                    'Research & Design',
                    'Portfolio',
                    'lunch',
                    'meetings'
                ]
            },
            {
                hour: '5:30pm - 9:45pm',
                activities: [
                    'travel',
                    'gym',
                    'dinner'
                ]
            },
            {
                hour: '9:45pm - 5:45am',
                activities: ['sleep']
            }
        ]
    },
    {
        day: 'Saturday',
        hours: [
            {
                hour: '5:45am - 7:00am',
                activities: [
                    'basketball'
                ]
            },
            {
                hour: '7:00am - 9:00am',
                activities: [
                    'bath and preparation',
                    'breakfast',
                    'plans'
                ]
            },
            {
                hour: '9:00am - 5:00pm',
                activities: [
                    'Research & Design',
                    'Portfolio',
                    'lunch',
                ]
            },
            {
                hour: '5:00pm - 9:00pm',
                activities: [
                    'travel',
                    'gym',
                    'dinner'
                ]
            },
            {
                hour: '9:00pm - 5:00am',
                activities: ['sleep']
            }
        ]
    },
    {
        day: 'Sunday',
        hours: [
            {
                hour: '5:00am - 6:00am',
                activities: [
                    'basketball'
                ]
            },
            {
                hour: '7:00am - 9:00am',
                activities: [
                    'bath and preparation',
                    'breakfast',
                    'plans'
                ]
            },
            {
                hour: '9:00am - 10:00am',
                activities: [
                    'Mass'
                ]
            },
            {
                hour: '10:00am - 5:00pm',
                activities: [
                    'Research & Design',
                    'Portfolio',
                    'lunch',
                ]
            },
            {
                hour: '5:00pm - 9:00pm',
                activities: [
                    'travel',
                    'gym',
                    'dinner'
                ]
            },
            {
                hour: '9:00pm - 5:00am',
                activities: ['sleep']
            }
        ]
    }
]


const Timeline = () => <div className="body py-4 background-gray">
    <div className="container">
        {data.map((d, i) => <div className={`card card--container ${data.length !== (i + 1) ? 'mb-4' : ''}`} key={i}>
            <div className="card-header">{d.day}</div>
            <div className="body">
                {d.hours.map((dHour, iHour) => <React.Fragment key={iHour}>
                    <div className="row">
                        <div className="col-sm">{dHour.hour}</div>
                        <div className="col-sm">{dHour.activities.map((dActivity, iActivity) => <div key={iActivity}>{dActivity}</div>)}</div>
                    </div>
                    {d.hours.length !== (iHour + 1) && <hr />}
                </React.Fragment>)}
            </div>
        </div>)}
    </div>
</div>


export default Timeline
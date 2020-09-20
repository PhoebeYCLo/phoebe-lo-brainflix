import React, { Component } from 'react';
import IconViews from './IconViews';
import IconLikes from './IconLikes';

class Info extends Component {
    render() {
        return (
            <div className="info__content">
                <div className="info__title">BMX Rampage: 2018 Highlights</div>
                <div className="info__detail">
                    <div className="info__detail-left">
                        <div className="info__channel">By Red Cow</div>
                        <div className="info__date">12/18/2018</div>
                    </div>
                    <div className="info__detail-right">
                        <div className="info__views">
                            <IconViews />
                            1,001,023
                        </div>
                        <div className="info__likes">
                            <IconLikes />
                            110,985
                        </div>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="info__description">
                On a gusty day in Southern Utah, a group of 25
                daring mountain bikers blew the doors off what is
                possible on two wheels, unleashing some of the
                biggest moments the sport has ever seen. 
                </div>
            </div>
        )
    }
}

export default Info;
import Image from 'next/image';
import React from 'react';

import Paypal from '@/public/paypal.png';
import Mastercard from '@/public/mastercard.png';
import Visa from '@/public/visa.png';
import AmericanExpress from '@/public/american-express.png';

function Payments() {
    return (
        <div className="payments">
            <p className="text-gray">Supported by other payment methods</p>
            <div className="payments-list">
                <div className="box payment-box">
                    <Image src={Paypal} alt="paypal image" />
                    <p>Paypal</p>
                </div>
                <div className="box payment-box">
                    <Image src={Mastercard} alt="mastercard image" />
                    <p>Mastercard</p>
                </div>
                <div className="box payment-box">
                    <Image src={Visa} alt="visa image" />
                    <p>Visa</p>
                </div>
                <div className="box payment-box">
                    <Image src={AmericanExpress} alt="american express image" />
                    <p>American Express</p>
                </div>
            </div>
        </div>
    );
}

export default Payments;

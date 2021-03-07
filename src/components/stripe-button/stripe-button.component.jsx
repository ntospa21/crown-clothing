import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_51ISTYuEm1SANXIXelt6ClDcXXmU6e4UJzfAxqSyt6CbVLuS6m5k6HNSohVLWpzbDFLcs3Q4kuYjJ8P82g1XONVjy009Agx30aO';
    

    const onToken = token => {
        console.log(token);
        alert('Payment Succesful!');
      };
    return(
        <StripeCheckout
        label='Pay Now'
        name='Crown Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
        panelLabel='Pay now'
        token={onToken}
        stripeKey={publishablekey}
        
        />
    );
};

export default StripeCheckoutButton;
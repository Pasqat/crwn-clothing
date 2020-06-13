import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishebleKey = 'pk_test_51GtVGoFI4U1iDyMeB6Ufiuq3Wi5egTb2AVe8h8FWp71uUhozfnglGJzfdrivz39PdXoJHpqXL93owvIUVkAOiltg00MRIn3pw7';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

    return(
        <StripeCheckout 
          label='Pay Now'
          name='CRWN Clothing'
          shippingAddress
          billingAddress
          image='http://svgshare.com/i/CUz.svg'
          description={`Your total is $${price}`}
          amount={priceForStripe}
          panelLabel='Pay Now'
          token={onToken} 
          stripeKey={publishebleKey} //è onSuccessful che triggera con il submit
        />
    )
}

export default StripeCheckoutButton;
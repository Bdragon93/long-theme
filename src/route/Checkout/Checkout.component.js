import { ContentWrapper } from 'SourceComponent/ContentWrapper/ContentWrapper.component';
import { Checkout as SourceCheckout } from 'SourceRoute/Checkout/Checkout.component';
import { BILLING_STEP, DETAILS_STEP } from 'SourceRoute/Checkout/Checkout.config';

import './Checkout.override.style.scss';

/** @namespace LongTheme/Route/Checkout/Component/CheckoutComponent */
export class CheckoutComponent extends SourceCheckout {
    renderCheckoutProcess() {
        const { checkoutStep } = this.props;
        const isShippingComplete = checkoutStep === BILLING_STEP || checkoutStep === DETAILS_STEP;
        const billingActive = isShippingComplete ? 'active' : '';
        const shippingNo = isShippingComplete ? <span>&#10003;</span> : 1;
        const billingNo = checkoutStep === DETAILS_STEP ? <span>&#10003;</span> : 2;
        const successActive = checkoutStep === DETAILS_STEP ? 'active' : '';

        return (
            <div block="ProcessBar">
                <div block="Line active" />
                <div block="NumberWrapper">
                    <div block="Number active">{ shippingNo }</div>
                    <div>Shipping</div>
                </div>
                <div block={ `Line ${billingActive}` } />
                <div block="NumberWrapper">
                    <div block={ `Number ${billingActive}` }>{ billingNo }</div>
                    <div>Review & Payments</div>
                </div>
                <div block={ `Line ${successActive}` } />
            </div>
        );
    }

    render() {
        return (
            <main block="Checkout">
                { this.renderCheckoutProcess() }
                <ContentWrapper wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } } label={ __('Checkout page') }>
                    { this.renderSummary(true) }
                    <div block="Checkout" elem="Step">
                        { this.renderTitle() }
                        { this.renderGuestForm() }
                        { this.renderStep() }
                        { this.renderLoader() }
                    </div>
                    <div>
                        { this.renderSummary() }
                        { this.renderPromo() }
                        { this.renderCoupon() }
                    </div>
                </ContentWrapper>
            </main>
        );
    }
}

export default CheckoutComponent;

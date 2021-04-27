import { ContentWrapper } from 'SourceComponent/ContentWrapper/ContentWrapper.component';
import { Checkout as SourceCheckout } from 'SourceRoute/Checkout/Checkout.component';
import { BILLING_STEP, DETAILS_STEP } from 'SourceRoute/Checkout/Checkout.config';

import './Checkout.override.style.scss';

/** @namespace LongTheme/Route/Checkout/Component/CheckoutComponent */
export class CheckoutComponent extends SourceCheckout {
    renderCheckoutProcess() {
        const { checkoutStep } = this.props;

        const isSuccess = checkoutStep === DETAILS_STEP;
        const isShippingComplete = checkoutStep === BILLING_STEP || isSuccess;

        const billingFillBefore = isShippingComplete ? 'fillBefore' : '';
        const billingFillAfter = isSuccess ? 'fillAfter' : '';

        const shippingNo = isShippingComplete ? <span>&#10003;</span> : 1;
        const billingNo = isSuccess ? <span>&#10003;</span> : 2;

        return (
            <div block="ProcessBar">
                <div block="NumberWrapper fillBefore">
                    <div block="Number">{ shippingNo }</div>
                    <div block="Step">Shipping</div>
                </div>
                <div block={ `NumberWrapper ${billingFillAfter} ${billingFillBefore}` }>
                    <div block="Number">{ billingNo }</div>
                    <div block="Step">Review & Payments</div>
                </div>
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

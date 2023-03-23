import PaytmChecksum from '../paytm/PaytmChecksum.js';
import { paytmParams, paytmMerchantkey } from '../index.js';


export const addPaymentGateway = async (req, res) => {
    try {
        let paytmchecksum = await PaytmChecksum.generateSignature(paytmParams, paytmMerchantkey);
        let params = {
            ...paytmParams, 'CHECKSUMHASH': paytmchecksum
        }
        res.status(200).json (params);
    } catch (error) {
        res.status (500).json ({error: error.message})
    }

}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Battlex Store</title>
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Segoe UI', Arial, sans-serif; }
        body { background-color: #f8f9fa; color: #333; padding: 15px; }
        
        /* Header */
        .store-header { text-align: center; padding: 20px 0; border-bottom: 2px solid #eee; margin-bottom: 20px; background: white; border-radius: 10px; box-shadow: 0 2px 5px rgba(0,0,0,0.05); }
        .store-header h1 { color: #111; font-size: 24px; text-transform: uppercase; letter-spacing: 1px; }
        
        /* Product Grid */
        .products-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-bottom: 30px; }
        .product-card { background: white; border-radius: 12px; padding: 10px; border: 1px solid #e1e1e1; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.02); }
        .product-img { width: 100%; height: 140px; background-color: #eee; border-radius: 8px; object-fit: cover; margin-bottom: 10px; display: flex; align-items: center; justify-content: center; color: #888; font-size: 12px; }
        .product-title { font-size: 14px; font-weight: 600; margin-bottom: 5px; height: 36px; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; }
        .product-price { color: #e74c3c; font-size: 16px; font-weight: bold; margin-bottom: 10px; }
        .buy-btn { background: #0076ff; color: white; border: none; padding: 8px 0; width: 100%; border-radius: 6px; font-weight: bold; font-size: 13px; cursor: pointer; }

        /* Checkout Section */
        .checkout-section { background: white; border-radius: 16px; padding: 20px; border: 1px solid #e1e1e1; box-shadow: 0 10px 20px rgba(0,0,0,0.05); margin-top: 20px; display: none; }
        .checkout-section h2 { font-size: 18px; margin-bottom: 15px; padding-bottom: 8px; border-bottom: 1px solid #eee; }
        
        .selected-prod-box { background: #fdfaf2; padding: 10px; border-radius: 8px; margin-bottom: 15px; border: 1px dashed #f39c12; font-size: 14px; }
        
        .form-group { margin-bottom: 15px; }
        .form-group label { display: block; font-size: 12px; font-weight: bold; margin-bottom: 5px; color: #666; text-transform: uppercase; }
        .form-group input, .form-group textarea, .form-group select { width: 100%; padding: 12px; border: 1px solid #ccc; border-radius: 8px; font-size: 14px; background: #fff; }
        .form-group textarea { height: 80px; resize: none; }
        
        .payment-info-box { background: #e8f4fd; padding: 12px; border-radius: 8px; margin-top: 10px; font-size: 13px; border: 1px solid #bce0fd; color: #1d6fa5; display: none; }
        
        .order-total-row { display: flex; justify-content: space-between; font-size: 18px; font-weight: bold; margin: 20px 0; padding-top: 10px; border-top: 1px solid #eee; }
        
        .complete-order-btn { background: #27ae60; color: white; border: none; width: 100%; padding: 15px; border-radius: 10px; font-size: 16px; font-weight: bold; cursor: pointer; box-shadow: 0 4px 10px rgba(39, 174, 96, 0.3); }
    </style>
</head>
<body>

    <div class="store-header">
        <h1>BATTLEX STORE</h1>
        <p style="font-size: 12px; color: #777; margin-top: 5px;">Premium Products - Fast Delivery</p>
    </div>

    <div class="products-grid">
        <div class="product-card">
            <div class="product-img">📦 Product Photo 1</div>
            <div class="product-title">Wireless Bluetooth Earbuds Pro</div>
            <div class="product-price">Rs. 2,499</div>
            <button class="buy-btn" onclick="openCheckout('Wireless Bluetooth Earbuds Pro', 2499)">Buy Now</button>
        </div>
        
        <div class="product-card">
            <div class="product-img">📦 Product Photo 2</div>
            <div class="product-title">Ultra Smart Watch Series 9</div>
            <div class="product-price">Rs. 3,250</div>
            <button class="buy-btn" onclick="openCheckout('Ultra Smart Watch Series 9', 3250)">Buy Now</button>
        </div>

        <div class="product-card">
            <div class="product-img">📦 Product Photo 3</div>
            <div class="product-title">Magnetic Fast Power Bank 10000mAh</div>
            <div class="product-price">Rs. 1,899</div>
            <button class="buy-btn" onclick="openCheckout('Magnetic Fast Power Bank 10000mAh', 1899)">Buy Now</button>
        </div>

        <div class="product-card">
            <div class="product-img">📦 Product Photo 4</div>
            <div class="product-title">Premium Tactical Wallet Carbon</div>
            <div class="product-price">Rs. 1,200</div>
            <button class="buy-btn" onclick="openCheckout('Premium Tactical Wallet Carbon', 1200)">Buy Now</button>
        </div>
    </div>

    <div class="checkout-section" id="checkout-form-box">
        <h2>Checkout Details</h2>
        
        <div class="selected-prod-box">
            <strong>Selected:</strong> <span id="checkout-prod-name">-</span>
        </div>

        <form onsubmit="confirmOrder(event)">
            <div class="form-group">
                <label>Full Name *</label>
                <input type="text" id="cust-name" placeholder="Apna poora naam likhein" required>
            </div>

            <div class="form-group">
                <label>WhatsApp / Phone Number *</label>
                <input type="tel" id="cust-phone" placeholder="03xxxxxxxxxx" required>
            </div>

            <div class="form-group">
                <label>Complete Delivery Address *</label>
                <textarea id="cust-address" placeholder="Ghar ka number, Gali, Ilaqa aur City laazmi likhein" required></textarea>
            </div>

            <div class="form-group">
                <label>Payment Method *</label>
                <select id="payment-method" onchange="togglePaymentInfo()" required>
                    <option value="COD">Cash on Delivery (COD)</option>
                    <option value="JazzCash">JazzCash (Advance)</option>
                    <option value="EasyPaisa">EasyPaisa (Advance)</option>
                </select>
                
                <div class="payment-info-box" id="advance-pay-details">
                    <strong>📢 Hidayat:</strong> Is number par paise send kar ke screenshot WhatsApp par bhaijein:<br>
                    <span style="font-weight: bold; color: #000;">Account Number: 03001234567</span><br>
                    <span style="font-weight: bold; color: #000;">Name: Seyam Hassan</span>
                </div>
            </div>

            <div class="order-total-row">
                <span>Total Bill:</span>
                <span id="checkout-total-bill">Rs. 0</span>
            </div>

            <button type="submit" class="complete-order-btn">Complete Order</button>
        </form>
    </div>

    <script>
        let currentPrice = 0;
        let currentItem = "";

        function openCheckout(productName, price) {
            currentItem = productName;
            currentPrice = price;
            
            document.getElementById('checkout-prod-name').innerText = productName;
            document.getElementById('checkout-total-bill').innerText = "Rs. " + price.toLocaleString();
            
            // Show the checkout form smooth
            let formBox = document.getElementById('checkout-form-box');
            formBox.style.display = 'block';
            formBox.scrollIntoView({ behavior: 'smooth' });
        }

        function togglePaymentInfo() {
            let method = document.getElementById('payment-method').value;
            let infoBox = document.getElementById('advance-pay-details');
            if(method === 'JazzCash' || method === 'EasyPaisa') {
                infoBox.style.display = 'block';
            } else {
                infoBox.style.display = 'none';
            }
        }

        function confirmOrder(e) {
            e.preventDefault();
            
            let name = document.getElementById('cust-name').value;
            let phone = document.getElementById('cust-phone').value;
            let address = document.getElementById('cust-address').value;
            let pMethod = document.getElementById('payment-method').value;

            // Abhi ke liye temporary alert, agle step mein ye data Firebase mein save hoga!
            alert("Shukriya " + name + "!\nAapka " + currentItem + " ka order recived ho gya ha.\nPayment Method: " + pMethod);
        }
    </script>
</body>
</html>

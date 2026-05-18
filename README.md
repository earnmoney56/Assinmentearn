<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Battlex - Admin Panel</title>
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Segoe UI', sans-serif; }
        body { background-color: #f3f4f6; padding: 20px; display: flex; flex-direction: column; align-items: center; }
        .admin-box { background: white; width: 100%; max-width: 400px; padding: 25px; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border: 1px solid #e5e7eb; }
        h2 { font-size: 20px; margin-bottom: 20px; color: #111; text-align: center; border-bottom: 2px solid #3b82f6; padding-bottom: 10px; }
        .form-group { margin-bottom: 15px; }
        label { display: block; font-size: 13px; font-weight: 600; margin-bottom: 6px; color: #4b5563; }
        input[type="text"], input[type="number"], input[type="file"] { width: 100%; padding: 12px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 14px; }
        input[type="file"] { background: #f9fafb; cursor: pointer; }
        .upload-btn { background: #3b82f6; color: white; border: none; width: 100%; padding: 14px; border-radius: 8px; font-size: 15px; font-weight: bold; cursor: pointer; margin-top: 10px; box-shadow: 0 4px 6px rgba(59, 130, 246, 0.2); }
        .status-msg { margin-top: 15px; text-align: center; font-size: 13px; font-weight: 500; color: #10b981; }
    </style>
</head>
<body>

    <div class="admin-box">
        <h2>Add New Product</h2>
        
        <form id="product-form" onsubmit="uploadProduct(event)">
            <div class="form-group">
                <label>Product Name *</label>
                <input type="text" id="p-name" placeholder="E.g., Wireless Earbuds Pro" required>
            </div>

            <div class="form-group">
                <label>Price (PKR) *</label>
                <input type="number" id="p-price" placeholder="E.g., 2500" required>
            </div>

            <div class="form-group">
                <label>Product Image (Select from Gallery) *</label>
                <input type="file" id="p-image" accept="image/*" required>
            </div>

            <button type="submit" class="upload-btn">🚀 Make Product Live</button>
        </form>

        <div class="status-msg" id="status"></div>
    </div>

    <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-database.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-storage.js"></script>

    <script>
        // Firebase Config (Hum agle step mein real keys dalenge)
        const firebaseConfig = {
            apiKey: "PLACEHOLDER",
            authDomain: "PLACEHOLDER",
            databaseURL: "PLACEHOLDER",
            projectId: "PLACEHOLDER",
            storageBucket: "PLACEHOLDER",
            messagingSenderId: "PLACEHOLDER",
            appId: "PLACEHOLDER"
        };

        firebase.initializeApp(firebaseConfig);
        const database = firebase.database();
        const storage = firebase.storage();

        function uploadProduct(e) {
            e.preventDefault();
            document.getElementById('status').innerText = "Connecting to Firebase...";
            alert("Perfect! Form ready hai. Firebase setup hote hi ye live kaam shuru kar dega.");
        }
    </script>
</body>
</html>

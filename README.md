<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Gurfat | Premium Rentals in Bahrain</title>

<link rel="icon" href="./assets/favicon.ico">
<link rel="stylesheet" href="./brand/brand.css">

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&display=swap" rel="stylesheet">

<style>
body{
  margin:0;
  font-family:'Inter',sans-serif;
  background:#ffffff;
  color:var(--gurfat-text);
}

.container{
  max-width:1100px;
  margin:auto;
  padding:0 20px;
}

header{
  padding:20px 0;
  border-bottom:1px solid var(--gurfat-line);
}

.nav{
  display:flex;
  justify-content:space-between;
  align-items:center;
}

.nav-links a{
  margin-left:20px;
  text-decoration:none;
  color:var(--gurfat-muted);
  font-weight:500;
}

.nav-links a:hover{
  color:var(--gurfat-navy);
}

.hero{
  padding:80px 0;
  text-align:center;
}

.hero h1{
  font-size:42px;
  font-weight:800;
  color:var(--gurfat-ink);
  margin-bottom:15px;
}

.hero p{
  font-size:18px;
  color:var(--gurfat-muted);
  margin-bottom:30px;
}

.section{
  padding:70px 0;
}

.section h2{
  text-align:center;
  font-size:28px;
  margin-bottom:40px;
}

.grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
  gap:20px;
}

.card{
  padding:25px;
}

.card h3{
  margin-top:0;
  color:var(--gurfat-ink);
}

.cta{
  padding:60px 0;
  text-align:center;
}

footer{
  background:var(--gurfat-soft);
  padding:40px 0;
  text-align:center;
  font-size:14px;
  color:var(--gurfat-muted);
}
</style>

</head>
<body>

<header>
  <div class="container nav">
    <img src="./assets/gurfat-logo-navy.png" height="40" alt="Gurfat">
    <div class="nav-links">
      <a href="#">Listings</a>
      <a href="#">Destinations</a>
      <a href="#">Landlords</a>
      <a href="#">Contact</a>
      <a href="#" class="btn btn-primary">List Property</a>
    </div>
  </div>
</header>

<section class="hero">
  <div class="container">
    <h1>Premium Rentals. Seamlessly Managed.</h1>
    <p>Effortless property management and luxury stays across Bahrain.</p>
    <a href="#" class="btn btn-primary">Explore Listings</a>
  </div>
</section>

<section class="section">
  <div class="container">
    <h2>Our Services</h2>
    <div class="grid">
      <div class="card">
        <h3>Full Property Management</h3>
        <p>From guest communication to maintenance, we handle everything for Bahrain property owners.</p>
      </div>
      <div class="card">
        <h3>Guest-Ready Apartments</h3>
        <p>Professionally prepared, fully furnished homes ready for short-term stays.</p>
      </div>
      <div class="card">
        <h3>Smart Pricing Engine</h3>
        <p>Optimized pricing for F1 weekends, peak seasons and high-demand periods.</p>
      </div>
    </div>
  </div>
</section>

<section class="section gurfat-cta">
  <div class="container">
    <h2>Own a Property in Bahrain?</h2>
    <p>Turn your apartment into passive income — fully managed by Gurfat.</p>
    <br>
    <a href="#" class="btn btn-secondary">Join as Landlord</a>
  </div>
</section>

<section class="section">
  <div class="container">
    <h2>Serving Bahrain’s Top Locations</h2>
    <div class="grid">
      <div class="card"><h3>Seef District</h3></div>
      <div class="card"><h3>Bahrain Bay</h3></div>
      <div class="card"><h3>Marassi Al Bahrain</h3></div>
      <div class="card"><h3>Juffair</h3></div>
    </div>
  </div>
</section>

<footer>
  <div class="container">
    © 2026 Gurfat. All rights reserved. <br>
    Premium Rentals in Bahrain.
  </div>
</footer>

</body>
</html>

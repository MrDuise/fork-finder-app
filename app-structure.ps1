ng generate module pages --flat=false
ng generate module shared
ng generate module services

# Pages
ng generate component pages/welcome
ng generate component pages/dashboard
ng generate component pages/swipe
ng generate component pages/profile
ng generate component pages/invite
ng generate component pages/final-vote
ng generate component pages/match

# Shared component
ng generate component shared/components/navbar
ng generate component shared/components/restaurant-card

# Service
ng generate service services/api

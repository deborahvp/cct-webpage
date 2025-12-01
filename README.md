# Centro Cristiano Transformación - Implementation Guide

## Project Status

✅ **Completed:**
- Backend server (`backend/server.js`) with all 5 API endpoints
- Database schema (`database/schema.sql`) with all 4 tables
- Angular project structure with all components generated
- All 4 services implemented (MinisteriosService, GruposService, ContactoService, OracionService)
- Routing configured for all 6 pages
- Bootstrap installed and global styles configured with required color palette
- HttpClient provider configured

⚠️ **Remaining Work:**
- Implement component views (HTML templates)
- Implement component logic (TypeScript)
- Add forms with validation
- Apply styling with Bootstrap classes
- Add parallax effects and animations

## Quick Start

### 1. Start the Backend
```bash
cd backend
node server.js
```
**Note:** Update MySQL credentials in `backend/server.js` (lines 14-17)

### 2. Create the Database
Run the SQL script in `database/schema.sql` in your MySQL database

### 3. Start the Frontend
```bash
cd frontend
npm start
```

## Component Implementation Templates

### Navbar Component
**File:** `frontend/src/app/components/navbar/navbar.ts`

```typescript
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent {
  isMenuCollapsed = true;
}
```

**File:** `frontend/src/app/components/navbar/navbar.html`

```html
<nav class="navbar navbar-expand-lg navbar-dark bg-oscuro fixed-top">
  <div class="container">
    <a class="navbar-brand fw-bold" routerLink="/inicio">Centro Cristiano Transformación</a>
    <button class="navbar-toggler" type="button" (click)="isMenuCollapsed = !isMenuCollapsed">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" [class.show]="!isMenuCollapsed">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link" routerLink="/inicio" routerLinkActive="active">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="/nosotros" routerLinkActive="active">Nosotros</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="/ministerios" routerLinkActive="active">Ministerios</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="/grupos" routerLinkActive="active">Grupos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="/contacto" routerLinkActive="active">Contacto</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="/oracion" routerLinkActive="active">Oración</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

**File:** `frontend/src/app/components/navbar/navbar.css`

```css
.navbar {
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.navbar-brand {
  font-size: 1.5rem;
  color: var(--color-cian) !important;
}

.nav-link {
  color: #fff !important;
  transition: color 0.3s ease;
  margin: 0 10px;
}

.nav-link:hover, .nav-link.active {
  color: var(--color-cian) !important;
}
```

### Footer Component
**File:** `frontend/src/app/components/footer/footer.ts`

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
```

**File:** `frontend/src/app/components/footer/footer.html`

```html
<footer class="bg-oscuro text-white py-4 mt-5">
  <div class="container text-center">
    <p class="mb-0">&copy; {{ currentYear }} Centro Cristiano Transformación. Todos los derechos reservados.</p>
  </div>
</footer>
```

### Contacto Component (Form Example)
**File:** `frontend/src/app/components/contacto/contacto.ts`

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactoService } from '../../services/contacto';

@Component({
  selector: 'app-contacto',
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})
export class ContactoComponent {
  formData = {
    nombre: '',
    correo: '',
    asunto: '',
    mensaje: ''
  };
  submitted = false;
  error = '';

  constructor(private contactoService: ContactoService) {}

  onSubmit() {
    this.contactoService.enviarMensaje(this.formData).subscribe({
      next: (response) => {
        this.submitted = true;
        this.formData = { nombre: '', correo: '', asunto: '', mensaje: '' };
      },
      error: (err) => {
        this.error = 'Error al enviar el mensaje';
      }
    });
  }
}
```

**File:** `frontend/src/app/components/contacto/contacto.html`

```html
<div class="container my-5" style="padding-top: 80px;">
  <h2 class="text-center mb-4">Contáctanos</h2>
  
  <div class="row justify-content-center">
    <div class="col-md-8">
      <div class="alert alert-success" *ngIf="submitted">
        ¡Mensaje enviado correctamente!
      </div>
      <div class="alert alert-danger" *ngIf="error">
        {{ error }}
      </div>
      
      <form (ngSubmit)="onSubmit()" #contactForm="ngForm">
        <div class="mb-3">
          <label class="form-label">Nombre</label>
          <input type="text" class="form-control" [(ngModel)]="formData.nombre" name="nombre" required>
        </div>
        <div class="mb-3">
          <label class="form-label">Correo</label>
          <input type="email" class="form-control" [(ngModel)]="formData.correo" name="correo" required>
        </div>
        <div class="mb-3">
          <label class="form-label">Asunto</label>
          <input type="text" class="form-control" [(ngModel)]="formData.asunto" name="asunto" required>
        </div>
        <div class="mb-3">
          <label class="form-label">Mensaje</label>
          <textarea class="form-control" rows="5" [(ngModel)]="formData.mensaje" name="mensaje" required></textarea>
        </div>
        <button type="submit" class="btn btn-custom" [disabled]="!contactForm.form.valid">Enviar</button>
      </form>
    </div>
  </div>
</div>
```

## Remaining Components to Implement

1. **InicioComponent** - Homepage with parallax hero section
2. **NosotrosComponent** - About page with parallax section
3. **MinisteriosComponent** - List ministerios from API
4. **GruposComponent** - List grupos + embedded registration form
5. **RegistroGrupoComponent** - Registration form (embedded in Grupos)
6. **OracionComponent** - Prayer request form

## Parallax Implementation Example

Add to component CSS:
```css
.hero-parallax {
  background-image: url('/assets/hero-bg.jpg');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}
```

## Color Palette Usage

Use these classes in your HTML:
- `.bg-turquesa` - Background #0495B5
- `.bg-petroleo` - Background #037B8C
- `.bg-profundo` - Background #025263
- `.bg-oscuro` - Background #01303B
- `.btn-custom` - Custom gradient button

## Next Steps

1. Implement Navbar and Footer components using templates above
2. Implement remaining components following the Contacto example
3. Add parallax effects to Inicio and Nosotros pages
4. Test all forms with the backend API
5. Add responsive design adjustments
6. Add animations and transitions as specified

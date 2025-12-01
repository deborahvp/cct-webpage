CREATE DATABASE IF NOT EXISTS cct_db;
USE cct_db;

CREATE TABLE IF NOT EXISTS ministerios (
    id_ministerio INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT NOT NULL,
    responsable VARCHAR(100) NOT NULL,
    imagen VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS grupos (
    id_grupo INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    lider VARCHAR(100) NOT NULL,
    horario VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS solicitudes_oracion (
    id_oracion INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(100) NOT NULL,
    telefono VARCHAR(20) NOT NULL,
    motivo TEXT NOT NULL,
    desea_ser_contactado BOOLEAN NOT NULL,
    fecha_solicitud TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    id_ministerio INT NULL,
    FOREIGN KEY (id_ministerio) REFERENCES ministerios(id_ministerio)
);


CREATE TABLE IF NOT EXISTS registro_grupos (
    id_registro INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(100) NOT NULL,
    telefono VARCHAR(20) NOT NULL,
    id_grupo INT NOT NULL,
    comentario TEXT,
    FOREIGN KEY (id_grupo) REFERENCES grupos(id_grupo)
);

CREATE TABLE IF NOT EXISTS contacto_mensajes (
    id_contacto INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(100) NOT NULL,
    asunto VARCHAR(150) NOT NULL,
    mensaje TEXT NOT NULL,
    fecha_envio TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample data for grupos
INSERT INTO grupos (nombre, lider, horario) VALUES
('Jóvenes', 'Juan Perez', 'Viernes 19:00'),
('Matrimonios', 'Carlos y Ana', 'Sábado 18:00'),
('Mujeres', 'Maria Lopez', 'Jueves 10:00');

INSERT INTO ministerios (nombre, descripcion, responsable, imagen) VALUES
('Oración', 'Ministerio dedicado a interceder por las necesidades de la iglesia, la comunidad y las personas que envían peticiones. Participarás en tiempos de oración grupal, intercederás por las solicitudes recibidas, apoyarás en cadenas de oración y acompañarás espiritualmente a quienes lo necesiten.', 'Otoniel Rangel', '/assets/group3.jpg'),
('Alabanza', 'Ministerio enfocado en la adoración musical. Apoyarás con voz o instrumentos, participarás en ensayos y ministrarás durante los servicios.', 'Carlos Sarkis', '/assets/alabanza.jpg'),
('Niños', 'Ministerio dedicado a la enseñanza bíblica infantil. Ayudarás en clases, dinámicas, cuidado y actividades creativas para los niños.', 'Sandra Saldaña', '/assets/ninos2.jpg'),
('Hombres', 'Ministerio para fortalecer la vida espiritual de varones. Participarás en estudios bíblicos, apoyarás en eventos y brindarás compañerismo a otros hombres.', 'Octavio Chone', '/assets/hombres.jpg'),
('Mujeres', 'Ministerio de unidad y servicio entre mujeres. Colaborarás en reuniones, tiempos de oración, apoyo emocional y actividades de bienvenida.', 'Martha Miranda', '/assets/mujeres.png'),
('Misiones', 'Ministerio enfocado en evangelismo y ayuda social. Participarás en visitas, actividades comunitarias y apoyo en proyectos evangelísticos y de ayuda social.', 'Irving Marmolejo', '/assets/ministerios2.jpg');

𝖐𝖊𝖎𝖑𝖊𝖗 𝖘𝖊𝖇𝖆𝖘𝖙𝖎𝖆𝖓 𝖘𝖊𝖗𝖗𝖆𝖓𝖔 𝖗𝖔𝖘𝖆𝖑𝖊𝖘

---

# 📘 TutorBot — Sistema inteligente para la gestión de tutorías académicas

**TutorBot** es una plataforma automatizada diseñada para gestionar el ciclo completo de las tutorías académicas a través de Telegram. Desarrollado sobre el motor de automatización n8n, este sistema actúa como un asistente virtual que conecta a estudiantes, tutores y coordinación académica en un único ecosistema digital, eliminando la intervención manual y reduciendo significativamente los tiempos de respuesta.

El sistema funciona como un orquestador de conversaciones. Cuando un estudiante escribe por primera vez, el bot detecta su identidad y crea una sesión persistente. Esto permite que, aunque el usuario abandone la conversación y regrese días después, el bot recuerde exactamente en qué punto del proceso se quedó, ofreciendo una experiencia fluida y continua.

## 🧭 Un enrutador inteligente que guía cada paso

El flujo principal actúa como el "cerebro" del sistema. Su tarea es recibir todos los mensajes entrantes, interpretar el estado actual del usuario y redirigir la conversación hacia el módulo especializado que corresponda. Este enrutador presenta un menú claro con las cinco acciones principales que el estudiante puede realizar, y se encarga de mantener actualizada la información de la sesión en todo momento, asegurando que cada interacción sea coherente con el paso anterior.

<img width="819" height="655" alt="image" src="https://github.com/user-attachments/assets/34f31e4d-bac8-44d4-8cf3-32d6137fa5a6" />


---

## 👤 Registro de estudiantes

Antes de poder solicitar una tutoría, el sistema verifica si el estudiante ya está registrado. En caso contrario, inicia un breve asistente de alta donde el usuario introduce su nombre completo. Este dato queda almacenado de forma segura en el registro de estudiantes, evitando duplicidades y garantizando que solo los usuarios autorizados puedan acceder a los servicios de tutoría.

<img width="1135" height="731" alt="image" src="https://github.com/user-attachments/assets/bb26919a-fe40-4d56-9676-69fcc29806b4" />


---

## 📚 Solicitud de tutoría con inteligencia artificial

El corazón funcional del bot reside en su capacidad para gestionar solicitudes de tutoría de manera totalmente autónoma. Cuando un estudiante elige esta opción, el sistema le presenta una lista actualizada de las materias disponibles. Tras seleccionar una, el bot solicita la fecha y hora deseada.

Aquí es donde entra en juego la inteligencia artificial: mediante el modelo Gemini de Google, el sistema interpreta el lenguaje natural del usuario. No importa si el estudiante escribe "mañana a las 4pm", "el próximo martes a las 9" o "20 de octubre a las 11:30", el motor de NLP convierte esa frase en un formato de fecha estandarizado y la contrasta con la base de datos de disponibilidad de los tutores.

En cuestión de segundos, el bot cruza la información de los tutores que imparten esa materia con los bloques de tiempo libres. Si encuentra una coincidencia, asigna automáticamente al tutor, reserva el bloque horario y confirma la tutoría. El estudiante recibe un mensaje en Telegram con los detalles de su cita, y el tutor recibe un correo electrónico formal notificándole la nueva asignación.

<img width="1620" height="685" alt="image" src="https://github.com/user-attachments/assets/d0d6cad1-4ebe-46a5-aaaf-a385adbf60d4" />


---

## 🔍 Consulta y cancelación de tutorías

Para ofrecer total transparencia, el bot permite al estudiante consultar en cualquier momento todas sus tutorías activas, mostrando el identificador, la materia y la fecha acordada.

Cuando surge un imprevisto y el estudiante necesita cancelar, el sistema simplifica el proceso. Basta con que el usuario proporcione el identificador de la tutoría que desea anular. El bot actualiza el estado de la sesión a "cancelada" y, de manera automática, libera el bloque horario en la agenda del tutor, dejándolo disponible para que otros estudiantes puedan aprovecharlo. Este mecanismo evita la acumulación de huecos ocupados innecesariamente y optimiza el uso de los recursos disponibles.

<img width="1383" height="612" alt="image" src="https://github.com/user-attachments/assets/c0d590ea-b844-4bbb-bcee-daeb4016b603" />


<img width="1470" height="602" alt="image" src="https://github.com/user-attachments/assets/5d9bc305-0d0a-497a-963a-8d137d5f8f6b" />


---

## 📩 Reporte de incidencias

El bot también incluye un canal formal para la resolución de problemas. Si el estudiante experimenta alguna dificultad, puede seleccionar la opción de reportar una incidencia. El sistema le pide que describa el problema y, acto seguido, genera un correo electrónico estructurado con los datos del estudiante y la descripción detallada, enviándolo directamente a la dirección de coordinación académica. Este flujo garantiza que las incidencias queden registradas y sean atendidas por el personal adecuado.

<img width="1275" height="694" alt="image" src="https://github.com/user-attachments/assets/3822ba7e-44c4-443a-9c30-16ca5364ec53" />


---

## ⏰ Recordatorios automáticos y notificaciones proactivas

Una de las funcionalidades más valiosas del sistema es su módulo de recordatorios. Cada hora, el bot ejecuta una revisión automática de todas las tutorías confirmadas. Si detecta que alguna sesión está programada para la próxima hora, activa un doble sistema de alerta: el estudiante recibe un mensaje directo en Telegram recordándole la cita, y el tutor recibe un correo electrónico con el mismo aviso. Esta capa de notificaciones proactivas ayuda a reducir significativamente las ausencias y mantiene a ambas partes alineadas.

<img width="1150" height="418" alt="image" src="https://github.com/user-attachments/assets/686e0cc1-1050-4506-b4af-deda1f841d92" />


---

## 🔗 Una arquitectura modular y escalable

El sistema está dividido en flujos de trabajo independientes pero interconectados. Cada funcionalidad principal (registro, solicitud, consulta, cancelación e incidencias) reside en su propio módulo, lo que facilita el mantenimiento, las actualizaciones y la corrección de errores sin afectar al resto de la plataforma.

Gracias a esta arquitectura, el bot opera de manera autónoma las 24 horas del día, los 7 días de la semana, liberando a los equipos administrativos de tareas repetitivas y permitiéndoles centrarse en la atención al estudiante y la mejora continua del servicio.



# Base de Datos
https://docs.google.com/spreadsheets/d/1ygecuB-AFm5T9iG6Zghjd1ZEgsOSn319E1gFcsksZKs/edit?usp=sharing

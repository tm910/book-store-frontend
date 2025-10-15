# بنية مجلد `src`

هذا المجلد يحتوي على البنية الافتراضية لمشروع React (Vite) — تم إنشاء المجلدات الشائعة لتحسين التنظيم.

المجلدات:

- `components/` — مكونات قابلة لإعادة الاستخدام (Buttons، Form، Layouts...)
- `pages/` — صفحات التطبيق (Home، BookList، BookDetail...)
- `hooks/` — hooks مخصصة (useAuth، useFetch...)
- `contexts/` — React Contexts (AuthContext، ThemeContext...)
- `services/` — وظائف الوصول إلى API (axios clients، endpoints...)
- `store/` — حالة مركزية (Redux / Zustand / Context state)
- `utils/` — دوال مساعدة ومكتبات صغيرة
- `routes/` — تعريفات الراوتر وترتيب المسارات
- `constants/` — ثوابت المشروع (keys، messages...)

ملحوظة: كل مجلد يحتوي على ملف `.gitkeep` فارغ حتى تظهر المجلدات في نظام التحكم بالإصدارات.

اقتراحات قادمة:

- أضيف أمثلة بسيطة (مثل `components/index.js` و `pages/Home.jsx`) إذا رغبت.
- أدمج TypeScript أو اختبارات صغيرة إن أردت توسيع البنية.

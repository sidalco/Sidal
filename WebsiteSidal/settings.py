
from pathlib import Path
import os

BASE_DIR = Path(__file__).resolve().parent.parent

SECRET_KEY = 'django-insecure-22h$-h6sr1%xas6ws10lqxk=v&swb)t8mdhi-q7k8jfelsz0y!'

DEBUG = True

ALLOWED_HOSTS = []

INSTALLED_APPS = [
    'main_app.apps.MainAppConfig',
    'company_app.apps.CompanyAppConfig',
    'product_app.apps.ProductAppConfig',
    'rest_framework',
    'corsheaders',

    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    
]














# CORS_ALLOWED_ORIGINS = [
#     "http://localhost:3000",
#     'http://127.0.0.1:8000',
# ]

CORS_ALLOW_METHODS = [
    'DELETE',
    'GET',
    'OPTIONS',
    'PATCH',
    'POST',
    'PUT',
]

# CORS_ORIGIN_WHITELIST = [
#     "http://localhost:3000",
#     'http://127.0.0.1:8000',
# ]
CORS_ALLOW_HEADERS = [
    "accept",
    "accept-encoding",
    "authorization",
    "content-type",
    "dnt",
    "origin",
    "user-agent",
    "x-csrftoken",
    "x-requested-with",
]

CORS_ORIGIN_ALLOW_ALL = True   

CORS_ALLOW_CREDENTIALS = True

REST_FRAMEWORK = {
    # Use Django's standard `django.contrib.auth` permissions,
    # or allow read-only access for unauthenticated users.
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.DjangoModelPermissionsOrAnonReadOnly'
    ]
}

ROOT_URLCONF = 'WebsiteSidal.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR,'templates')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'WebsiteSidal.wsgi.application'

# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.mysql',
#         'NAME': 'sidal_db',
#         'USER': 'sidal_user',
#         'PASSWORD': 'sidal_20011223',
#         'HOST': '127.0.0.1:8000',  # Set to 'localhost' if the database is on the same machine
#         'PORT': '',  # Set to '' for default
#     }
# }


DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_TZ = True



DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'


DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'



'''
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'Sidal_FrontEnd', 'build', 'static'),
]
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
MEDIA_URL = '/media/'
'''








STATIC_ROOT = os.path.join(BASE_DIR,'static')
STATIC_URL = 'static/'
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'WebsiteSidal/static' ),
] 
MEDIA_ROOT = os.path.join(BASE_DIR,'media')
MEDIA_URL = 'media/'

















'''




memorize this code as z001

# view.py
class ContactUsListCreateView(generics.ListCreateAPIView):
    queryset = ContactUs.objects.all()
    serializer_class = ContactUsSerializer
    
# Serializer.py

class ContactUsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactUs
        fields = '__all__'

# models.py

class ContactUs(models.Model):
    full_name=models.CharField(verbose_name='Users Full Name', max_length=50)
    email=models.EmailField(verbose_name='Users Email', max_length=250)
    subject = models.CharField(verbose_name='Emailing Subject', max_length=70)
    content =models.TextField(verbose_name='Message Body')
    phone_number = models.CharField(verbose_name='Users Phone',max_length=15)
    date = models.DateTimeField(verbose_name='Message Date', auto_now=True, auto_now_add=False)
    




    def __str__(self) :
        return self.user_email
    class Meta:
        ordering = ['date']
        verbose_name = 'Contact Us'

# urls.py
urlpatterns = [
    path('contactus/', ContactUsListCreateView.as_view(), name='contactus-list-create'),
]


# Setting .py

CORS_ALLOW_METHODS = [
    'DELETE',
    'GET',
    'OPTIONS',
    'PATCH',
    'POST',
    'PUT',
]
CORS_ALLOW_HEADERS = [
    "accept",
    "accept-encoding",
    "authorization",
    "content-type",
    "dnt",
    "origin",
    "user-agent",
    "x-csrftoken",
    "x-requested-with",
]

CORS_ORIGIN_ALLOW_ALL = True   

CORS_ALLOW_CREDENTIALS = True





'''

































































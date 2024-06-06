from django.urls import path, include
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('sidal/', admin.site.urls),
    path('product/', include('product_app.urls')),
    path('', include('main_app.urls')),
    path('company/', include('company_app.urls')),
]
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)



# Catch-all pattern to direct any other requests to React's index.html
# urlpatterns += [
#     re_path(r'^.*$', TemplateView.as_view(template_name='index.html')),
# ]





# urlpatterns = [
#     # Your URL patterns here
# ]

# Only for development
















'''
# from django.urls import path, include, re_path
# from django.conf import settings
# from django.conf.urls.static import static
# from django.views.generic import TemplateView

# import product_app.urls
# import company_app.urls
# import main_app.urls

# urlpatterns = [
#     path('sidal/', admin.site.urls),
#     path('', include(main_app.urls)),
#     path('products/', include(product_app.urls)),
#     path('company/', include(company_app.urls)),
# ]

# Serve media files during development
# urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)



# In settings.py, make sure to add the following:
# STATICFILES_DIRS = [
#     os.path.join(BASE_DIR, 'build/static'),
# ]

# from django.contrib import admin
# from django.urls import path , include
# import product_app.urls , company_app.urls , main_app.urls 
# from django.conf import settings
# from django.conf.urls.static import static

# urlpatterns = [
#     path('sidal/', admin.site.urls),
#     path('', include(main_app.urls) ),
#     path('products/', include(product_app.urls) ),
#     path('company/', include(company_app.urls) ),
# ] + static (settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)

    # path('admin/', admin.site.urls),
    # path('', )
    # path('air-comp/', include(aircompressor.urls) ),
    # path('jet-ink/', include(jetInk.urls) ),
    # path('stanles-steel/', include(steelStanless.urls) ),
    # path('water-investement/', include(waterInvestement.urls) ),
'''


from django.contrib import admin
from .models import *
admin.site.register( MainViewPage )
admin.site.register( MainPagePics )
admin.site.register( Services )
admin.site.register( ContactUsForm )
admin.site.register( ContactUsInfo )
admin.site.register( ContactUsMap )
admin.site.register( AboutUS )
admin.site.register( SocialMediaLinks )
admin.site.site_header = "S I D A L    A D M I N"
admin.site.site_title = " => | S I D A L | "
admin.site.index_title = " Admin"


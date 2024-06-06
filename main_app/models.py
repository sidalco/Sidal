from django.db import models
# from datetime import datetime
###
class MainViewPage(models.Model):
    id = models.PositiveIntegerField(primary_key=True,unique=True)
    first_words = models.CharField(verbose_name='hello, here is...', max_length=150,default='hello, here is')
    company_Name = models.CharField(verbose_name='Company Name in First Page', max_length=150)
    Discription = models.TextField(verbose_name='here is descrip of Main Page')
    image = models.ImageField(verbose_name='Photo of Main Page',
                            upload_to='Images/MainPage/%y/%m%d',
                            default='',
                            height_field=None, 
                            width_field=None,
                            max_length=None)
    def __str__(self) :
        return str(self.id)
    class Meta:
        ordering = ['first_words']
        verbose_name = 'View of Main Page'

###
class MainPagePics (models.Model):
    id = models.PositiveIntegerField(primary_key=True,unique=True)
    name = models.CharField(verbose_name='photo name', max_length=50)
    image = models.ImageField(verbose_name='Photo of Main Page',
                            upload_to='Images/MainPage/%y/%m%d',
                            default='',
                            height_field=None, 
                            width_field=None,
                            max_length=None)
    
    def __str__(self) :
        return self.name
    class Meta:
        ordering = ['name']
        verbose_name = 'Main Page Pictures'

###
class Services(models.Model):
    service_name = models.CharField(verbose_name='Service Name', max_length=50)
    explanation = models.TextField(verbose_name='about Service')
    icon = models.CharField(verbose_name='Icon from FontAwesome.com', max_length=150)
    
    def __str__(self) :
        return self.service_name
    class Meta:
        ordering = ['service_name']
        verbose_name = 'Services'

###
class ContactUsForm(models.Model):
    full_name=models.CharField(verbose_name='Users Full Name', max_length=50)
    email=models.EmailField(verbose_name='Users Email', max_length=250)
    subject = models.CharField(verbose_name='Emailing Subject', max_length=70)
    content =models.TextField(verbose_name='Message Body')
    phone_number = models.CharField(verbose_name='Users Phone',max_length=15)
    date = models.DateTimeField(verbose_name='Message Date', auto_now=True, auto_now_add=False)
    




    def __str__(self):
        return self.email
    class Meta:
        ordering = ['date']
        verbose_name = 'Contact Us'

###
class ContactUsInfo(models.Model):
    FieldName=models.CharField(verbose_name='Users Full Name', max_length=50)
    FieldData=models.CharField(verbose_name='Users Full Name', max_length=50)

    def __str__(self):
        return self.FieldName
    class Meta:
        ordering = ['FieldName']
        verbose_name = 'Contact Us Information'

class ContactUsMap(models.Model):
    mapURL=models.CharField(verbose_name='Copy Map URL => src="URL"', max_length=250)

    def __str__(self):
        return self.mapURL
    class Meta:
        ordering = ['mapURL']
        verbose_name = 'Our Location On Google Map'

class AboutUS(models.Model):
    id = models.PositiveIntegerField(primary_key=True,unique=True)
    comapny_name = models.CharField(verbose_name='Company Name', max_length=50 , default='Sidal')
    descrip =models.TextField(verbose_name='Description of Company')
    image = models.ImageField(upload_to='Images/AboutUS/%y/%m%d',
                            default='',
                            verbose_name='Images About Us',
                            height_field=None, 
                            width_field=None,
                            max_length=None)
    
    def __str__(self) :
        return self.comapny_name
    class Meta:
        ordering = ['comapny_name']
        verbose_name = 'About US'
        
###
class SocialMediaLinks(models.Model):
    platform = models.CharField(verbose_name='Social Platform', max_length=70)
    link = models.URLField(verbose_name='Our Page Link')
    
    def __str__(self) :
        return self.platform
    class Meta:
        ordering = ['platform']
        verbose_name = 'Social Media Links'
        









'''
# title = models.CharField(verbose_name='Title of Feature', max_length=50 , default='Sidal')
# discript = models.TextField()
###########

# class Examples(models.Model):
#     x= [
#         ('Arabic','Arabic'),
#         ('English','English'),

#     ]
#     name = models.CharField( max_length=50,null=True,blank=True)
#     prices= models.DecimalField( max_digits=5, decimal_places=2)
#     image = models.ImageField( upload_to='Exapmle_Photos/%y/%m%d',
#                               default='',
#                                height_field=None, 
#                                width_field=None,
#                                max_length=None)
#     boll_forShowing = models.BooleanField(default=False)
#     datee = models.DateTimeField( auto_now=False, auto_now_add=False)
#     category = models.CharField(choices=x, max_length=50 ,default='Arabic')
#     pdf_file = models.FileField(verbose_name='PDF File', 
#                                        upload_to='Exapmle_PDF/%y/%m%d')
#     created = models.DateTimeField(datetime.now,auto_now=False, auto_now_add=False)

#     def __str__(self) :
#         return self.name
#     class Meta:
#         ordering = ['datee']
#         verbose_name = 'Example'

# null=True     يمكن حغظ القيمة فارغة
# blank=True    هذا الفيلد غير مطلوب
'''


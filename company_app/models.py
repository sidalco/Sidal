from django.db import models

class LatestNews(models.Model):
    title = models.CharField(verbose_name='Title', max_length=90)
    description = models.TextField(verbose_name='Explanation')
    dateofEvent = models.DateField(verbose_name="Date of Event", auto_now=False, auto_now_add=False)
    image = models.ImageField(upload_to='Images/LatestNews/%y/%m%d',
                            default='',
                            verbose_name='Image of Event',
                            height_field=None, 
                            width_field=None,
                            max_length=None)
    link = models.TextField(verbose_name='Related link about this event',default='https://www.facebook.com/SIDAL.SET/')
    def __str__(self) :
        return self.title
    class Meta:
        ordering = ['dateofEvent']
        verbose_name = 'Our News'
    

class OurBranches(models.Model):
    name = models.CharField(verbose_name="Branch Name", max_length=70)
    tele = models.CharField(verbose_name='Phone Number',max_length=15)
    fax = models.CharField(verbose_name='Fax Number',max_length=15)
    mail = models.EmailField(verbose_name="Brnach Email", max_length=254)
    address = models.CharField(max_length=100)
    website = models.URLField(verbose_name='Branch Website', max_length=300)
    location = models.URLField(verbose_name=" GPS link in GoogleMaps", max_length=300)
    
    def __str__(self) :
        return self.name
    class Meta:
        ordering = ['name']
        verbose_name = 'Our Branches'


class OurTechnologies(models.Model):
    name = models.CharField(verbose_name="Technology Name", max_length=50)
    description= models.TextField(verbose_name="Description")
    image = models.ImageField(upload_to='Images/OurTechnologies/%y/%m%d',
                            default='',
                            verbose_name='Symbol or Icon',
                            height_field=None, 
                            width_field=None,
                            max_length=None)
    
    def __str__(self) :
        return self.name
    class Meta:
        ordering = ['name']
        verbose_name = 'Our Technologies'

class Catalogue(models.Model):
    name = models.CharField(verbose_name="Catalogue Name", max_length=50)
    language = models.CharField(verbose_name="catalogue language", max_length=50)
    pdf_file = models.FileField(verbose_name='Catalogue PDF file',upload_to='documents/Catalogue/%y/%m%d')
    image = models.ImageField(upload_to='Images/Catalogue/%y/%m%d',
                            default='',
                            verbose_name='Catalogue Image',
                            height_field=None, 
                            width_field=None,
                            max_length=None)
    
    def __str__(self) :
        return self.name
    class Meta:
        ordering = ['name']
        verbose_name = 'Catalogues'


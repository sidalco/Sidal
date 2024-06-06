from django.db import models

class Compressors(models.Model):
    id = models.PositiveIntegerField(primary_key=True,unique=True)
    Title = models.CharField(max_length=70)
    description = models.TextField(verbose_name="description", default='Compressors Definition')
    image = models.ImageField(upload_to='Images/Compressors/%y/%m%d',
                            verbose_name='Compressors Images ',
                            default='',
                            height_field=None, 
                            width_field=None,
                            max_length=None)
    def __str__(self) :
        return self.name
    class Meta:
        ordering = ['name']
        verbose_name = 'Compressors Definition'

class SteelStanless(models.Model):
    id = models.PositiveIntegerField(primary_key=True,unique=True)
    Title = models.CharField(max_length=70)
    description = models.TextField(verbose_name="description", default='SteelStanless Definition')
    image = models.ImageField(upload_to='Images/SteelStanless/%y/%m%d',
                            verbose_name='SteelStanless Images ',
                            default='',
                            height_field=None, 
                            width_field=None,
                            max_length=None)
    def __str__(self) :
        return self.name
    class Meta:
        ordering = ['name']
        verbose_name = 'SteelStanless Definition'

class JetINK(models.Model):
    id = models.PositiveIntegerField(primary_key=True,unique=True)
    Title = models.CharField(max_length=70)
    description = models.TextField(verbose_name="description", default='etINK Printers Definition')
    image = models.ImageField(upload_to='Images/SteelStan304/%y/%m%d',
                            verbose_name='JetINK Printers Images ',
                            default='',
                            height_field=None, 
                            width_field=None,
                            max_length=None)
    def __str__(self) :
        return self.name
    class Meta:
        ordering = ['name']
        verbose_name = 'JetINK Printers Definition'

class WaterInvestement(models.Model):
    id = models.PositiveIntegerField(primary_key=True,unique=True)
    Title = models.CharField(max_length=70)
    description = models.TextField(verbose_name="description", default='Water Investement Definition')
    image = models.ImageField(upload_to='Images/SteelStan304/%y/%m%d',
                            verbose_name='Water Investement Images ',
                            default='',
                            height_field=None, 
                            width_field=None,
                            max_length=None)
    def __str__(self) :
        return self.name
    class Meta:
        ordering = ['name']
        verbose_name = 'Water Investement Definition'





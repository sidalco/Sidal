from django.db import models


class RotaryScrewCompressor(models.Model):
    SECREW_CHOICES = {
        ('oil_injected' , 'oil_injected'),
         ('oil_free' , 'oil_free')
    }
    name = models.CharField(max_length=70)
    description = models.TextField(verbose_name="description", default='A Rotary Screw Compressor')
    type = models.CharField(choices=SECREW_CHOICES, max_length=50)
    pdf_file = models.FileField(upload_to='documents/RotaryScrewCompressor/%y/%m%d')
    image = models.ImageField(upload_to='Images/RotaryScrewCompressor/%y/%m%d',
                            verbose_name='Rotary Screw Compressor Images ',
                            default='',
                            height_field=None, 
                            width_field=None,
                            max_length=None)
    
    def __str__(self) :
        return self.name
    class Meta:
        ordering = ['name']
        verbose_name = 'Rotary Screw Compressor'
   
class ReciprocatingCompressor(models.Model):
    RECIPROCATING_CHOICES = {
        ('Oil Injected' , 'Oil Injected'),
         ('Oil Free' , 'Oil Free')
    }
    name = models.CharField(max_length=70)
    description = models.TextField(verbose_name="description", default='A Reciprocating Compressor')
    type = models.CharField(choices=RECIPROCATING_CHOICES, max_length=50)
    pdf_file = models.FileField(upload_to='documents/ReciprocatingCompressor/%y/%m%d')
    image = models.ImageField(upload_to='Images/ReciprocatingCompressor/%y/%m%d',
                            verbose_name='Reciprocating Compressor Images ',
                            default='',
                            height_field=None, 
                            width_field=None,
                            max_length=None)
    
    def __str__(self) :
        return self.name
    class Meta:
        ordering = ['name']
        verbose_name = 'Reciprocating Compressor'
   
class ScrollCompressor(models.Model):
    name = models.CharField(max_length=70)
    description = models.TextField(verbose_name="description", default='A Scroll Compressor')
    pdf_file = models.FileField(upload_to='documents/ScrollCompressor/%y/%m%d')
    image = models.ImageField(upload_to='Images/ScrollCompressor/%y/%m%d',
                            verbose_name='Scroll Compressor Images ',
                            default='',
                            height_field=None, 
                            width_field=None,
                            max_length=None)
      
    def __str__(self) :
        return self.name
    class Meta:
        ordering = ['name']
        verbose_name = 'Scroll Compressor'
   
class TurboCompressor(models.Model):
    name = models.CharField(max_length=70)
    description = models.TextField(verbose_name="description", default='A TurboC ompressor')
    pdf_file = models.FileField(upload_to='documents/TurboCompressor/%y/%m%d')
    image = models.ImageField(upload_to='Images/TurboCompressor/%y/%m%d',
                            verbose_name='Turbo Compressor Images ',
                            default='',
                            height_field=None, 
                            width_field=None,
                            max_length=None)
    
    def __str__(self) :
        return self.name
    class Meta:
        ordering = ['name']
        verbose_name = 'Turbo Compressor'
 
################ ( Compressor Equipement ) ################
class AirDryerEquipement(models.Model):
    name = models.CharField(max_length=70)
    description = models.TextField(verbose_name="description",default='An Air Dryer Equipement')
    pdf_file = models.FileField(upload_to='documents/AirDryerEquipement/%y/%m%d')
    image = models.ImageField(upload_to='Images/AirDryerEquipement/%y/%m%d',
                            verbose_name='Air Dryer Equipement Images ',
                            default='',
                            height_field=None, 
                            width_field=None,
                            max_length=None)
    
    def __str__(self) :
        return self.name
    class Meta:
        ordering = ['name']
        verbose_name = 'Air Dryer Equipement'

class FilterEquipement(models.Model):
    name = models.CharField(max_length=70)
    description = models.TextField(verbose_name="description", default='A Filter Equipement')
    pdf_file = models.FileField(upload_to='documents/FilterEquipement/%y/%m%d')
    image = models.ImageField(upload_to='Images/FilterEquipement/%y/%m%d',
                            verbose_name='Filter Equipement Images ',
                            default='',
                            height_field=None, 
                            width_field=None,
                            max_length=None)
    
    
    def __str__(self) :
        return self.name
    class Meta:
        ordering = ['name']
        verbose_name = 'Filter Equipement'

class AirReceiverEquipement(models.Model):
    name = models.CharField(max_length=70)
    description = models.TextField(verbose_name="description", default='An Air Receiver Equipement')
    pdf_file = models.FileField(upload_to='documents/AirReceiverEquipement/%y/%m%d')
    image = models.ImageField(upload_to='Images/AirReceiverEquipement/%y/%m%d',
                            verbose_name='Air Receiver Equipement Images ',
                            default='',
                            height_field=None, 
                            width_field=None,
                            max_length=None)
    
    
    def __str__(self) :
        return self.name
    class Meta:
        ordering = ['name']
        verbose_name = 'Air Receiver Equipement'
 
class NitrogenGeneratorEquipement(models.Model):
    name = models.CharField(max_length=70)
    description = models.TextField(verbose_name="description", default='A Nitrogen Generator Equipement')
    pdf_file = models.FileField(upload_to='documents/NitrogenGeneratorEquipement/%y/%m%d')
    image = models.ImageField(upload_to='Images/NitrogenGeneratorEquipement/%y/%m%d',
                            verbose_name='Nitrogen Generator Equipement Images ',
                            default='',
                            height_field=None, 
                            width_field=None,
                            max_length=None)
    
    def __str__(self) :
        return self.name
    class Meta:
        ordering = ['name']
        verbose_name = 'Nitrogen Generator Equipement'
   
############################################################################
    
    
# class DODInkJet(models.Model):
#     DOD_CHOICES = {
#         ('p2128' , 'p2128'),
#         ('bicolor' , 'bicolor'),
#         ('EVO' , 'EVO')
#     }
#     name = models.CharField(max_length=70)
#     description = models.TextField(verbose_name="description", default='A DOD Ink Jet')
#     type = models.CharField(choices=DOD_CHOICES, max_length=50)
#     pdf_file = models.FileField(upload_to='documents/DODInkJet/%y/%m%d')
#     image = models.ImageField(upload_to='Images/DODInkJet/%y/%m%d',
#                             verbose_name='DOD Ink Jet Images ',
#                             default='',
#                             height_field=None, 
#                             width_field=None,
#                             max_length=None)
    
    
#     def __str__(self) :
#         return self.name
#     class Meta:
#         ordering = ['name']
#         verbose_name = 'DOD Ink Jet'

# class CIJInkJet(models.Model):
#     CIJ_CHOICES = {
#         ('KGK' , 'KGK'),
#          ('videojet' , 'videojet')
#     }
#     name = models.CharField(max_length=70)
#     description = models.TextField(verbose_name="description", default='A CIJ Ink Jet')
#     type = models.CharField(choices=CIJ_CHOICES, max_length=50)
#     pdf_file = models.FileField(upload_to='documents/CIJInkJet/%y/%m%d')
#     image = models.ImageField(upload_to='Images/CIJInkJet/%y/%m%d',
#                             verbose_name='CIJ Ink Jet Images ',
#                             default='',
#                             height_field=None, 
#                             width_field=None,
#                             max_length=None)
    
    
#     def __str__(self) :
#         return self.name
#     class Meta:
#         ordering = ['name']
#         verbose_name = 'CIJ Ink Jet'

# class TIJInkJet(models.Model):
#     name = models.CharField(max_length=70)
#     description = models.TextField(verbose_name="description", default='A TIJ Ink Jet')
#     pdf_file = models.FileField(upload_to='documents/TIJInkJet/%y/%m%d')
#     image = models.ImageField(upload_to='Images/TIJInkJet/%y/%m%d',
#                             verbose_name='TIJ Ink Jet Images ',
#                             default='',
#                             height_field=None, 
#                             width_field=None,
#                             max_length=None)
    
    
#     def __str__(self) :
#         return self.name
#     class Meta:
#         ordering = ['name']
#         verbose_name = 'TIJ Ink Jet'
   
# class LaserMarkingInkJet(models.Model):
#     LaserMarking_CHOICES = {
#         ('fiber' , 'fiber'),
#         ('uv' , 'uv'),
#         ('co2' , 'co2')
#     }
#     name = models.CharField(max_length=70)
#     description = models.TextField(verbose_name="description", default='A Laser Marking Ink Jet')
#     type = models.CharField(choices=LaserMarking_CHOICES, max_length=50)
#     pdf_file = models.FileField(upload_to='documents/LaserMarkingInkJet/%y/%m%d')
#     image = models.ImageField(upload_to='Images/LaserMarkingInkJet/%y/%m%d',
#                             verbose_name='Laser Marking Ink Jet Image ',
#                             default='',
#                             height_field=None, 
#                             width_field=None,
#                             max_length=None)
    
#     def __str__(self) :
#         return self.name
#     class Meta:
#         ordering = ['name']
#         verbose_name = 'Laser Marking Ink Jet'
   
############################################################################
    

class SteelStan304(models.Model):
    name = models.CharField(max_length=70)
    description = models.TextField(verbose_name="description", default='A Steel Stanless')
    pdf_file = models.FileField(upload_to='documents/SteelStan304/%y/%m%d')
    image = models.ImageField(upload_to='Images/SteelStan304/%y/%m%d',
                            verbose_name='Steel Stanless 304 Images ',
                            default='',
                            height_field=None, 
                            width_field=None,
                            max_length=None)
    def __str__(self) :
        return self.name
    class Meta:
        ordering = ['name']
        verbose_name = 'Steel Stanless 304'


class SteelStan316(models.Model):
    name = models.CharField(max_length=70)
    description = models.TextField(verbose_name="description", default='A Steel Stanless')
    pdf_file = models.FileField(upload_to='documents/SteelStan316/%y/%m%d')
    image = models.ImageField(upload_to='Images/SteelStan316/%y/%m%d',
                            verbose_name='Steel Stanless 316 Images ',
                            default='',
                            height_field=None, 
                            width_field=None,
                            max_length=None)
    def __str__(self) :
        return self.name
    class Meta:
        ordering = ['name']
        verbose_name = 'Steel Stanless 316'
   
############################################################################
    
    
 
class WaterInvesemetEquipement(models.Model):
    name = models.CharField(max_length=70)
    description = models.TextField(verbose_name="description", default='A Water Invesemet Equipement')
    pdf_file = models.FileField(upload_to='documents/WaterInvesemetEquipement/%y/%m%d')
    image = models.ImageField(upload_to='Images/WaterInvesemetEquipement/%y/%m%d',
                            verbose_name='Images of Water Equipement',
                            default='',
                            height_field=None, 
                            width_field=None,
                            max_length=None)
    
    
    def __str__(self) :
        return self.name
    class Meta:
        ordering = ['name']
        verbose_name = 'Water Invesemet Equipement'
   
class WaterInvesemetSystem(models.Model):
    name = models.CharField(max_length=70)
    description = models.TextField(verbose_name="description", default='A Water Invesemet System')
    pdf_file = models.FileField(upload_to='documents/WaterInvesemetSystem/%y/%m%d')
    image = models.ImageField(upload_to='Images/WaterInvesemetSystem/%y/%m%d',
                            default='',
                            verbose_name='Images of Water System',
                            height_field=None, 
                            width_field=None,
                            max_length=None)
    
    def __str__(self) :
        return self.name
    class Meta:
        ordering = ['name']
        verbose_name = 'Water Invesemet System'
    









class DODInkJetDescription(models.Model):
    name = models.CharField(max_length=70)
    description = models.TextField(verbose_name="Description", default='A Water Invesemet System')
    
    def __str__(self) :
        return self.name
    class Meta:
        ordering = ['name']
        verbose_name = 'DODInkJet Description'
    
class DODInkJetImages(models.Model):
    imageName = models.CharField(max_length=70,default='newImage')
    image = models.ImageField(upload_to='Images/WaterInvesemetSystem/%y/%m%d',
                            default='',
                            verbose_name='Images of Water System',
                            height_field=None, 
                            width_field=None,
                            max_length=None)
    
    def __str__(self) :
        return self.imageName
    class Meta:
        ordering = ['image']
        verbose_name = 'DODInkJet Image'
    


class CIJInkJetDescription(models.Model):
    name = models.CharField(max_length=70)
    description = models.TextField(verbose_name="Description", default='A Water Invesemet System')
    
    def __str__(self) :
        return self.name
    class Meta:
        ordering = ['name']
        verbose_name = 'CIJInkJet Description'
    
class CIJInkJetImages(models.Model):
    imageName = models.CharField(max_length=70 , default='newImage')
    image = models.ImageField(upload_to='Images/WaterInvesemetSystem/%y/%m%d',
                            default='',
                            verbose_name='Images of Water System',
                            height_field=None, 
                            width_field=None,
                            max_length=None)
    
    def __str__(self) :
         return self.imageName
    class Meta:
        ordering = ['image']
        verbose_name = 'CIJInkJet Images'
    


class TIJInkJetDescription(models.Model):
    name = models.CharField(max_length=70)
    description = models.TextField(verbose_name="Description", default='A Water Invesemet System')
    
    def __str__(self) :
        return self.name
    class Meta:
        ordering = ['name']
        verbose_name = 'TIJInkJet Description'
    
class TIJInkJetImages(models.Model):
    imageName = models.CharField(max_length=70 , default='newImage')
    image = models.ImageField(upload_to='Images/WaterInvesemetSystem/%y/%m%d',
                            default='',
                            verbose_name='Images of Water System',
                            height_field=None, 
                            width_field=None,
                            max_length=None)
    
    def __str__(self) :
         return self.imageName
    class Meta:
        ordering = ['image']
        verbose_name = 'TIJInkJet Image'
    


class LaserMarkingInkJetDescription(models.Model):
    name = models.CharField(max_length=70 )
    description = models.TextField(verbose_name="Description", default='A Water Invesemet System')
    
    def __str__(self) :
        return self.name
    class Meta:
        ordering = ['name']
        verbose_name = 'LaserMarkingInkJet Description'
    
class LaserMarkingInkJetImages(models.Model):
    imageName = models.CharField(max_length=70 , default='newImage')
    image = models.ImageField(upload_to='Images/WaterInvesemetSystem/%y/%m%d',
                            default='',
                            verbose_name='Images of Water System',
                            height_field=None, 
                            width_field=None,
                            max_length=None)
    
    def __str__(self) :
         return self.imageName
    class Meta:
        ordering = ['image']
        verbose_name = 'LaserMarkingInkJet Image '
    




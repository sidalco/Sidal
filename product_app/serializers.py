from rest_framework import serializers
from .models import (
    RotaryScrewCompressor, ReciprocatingCompressor, ScrollCompressor, TurboCompressor,
    AirDryerEquipement, FilterEquipement, AirReceiverEquipement, NitrogenGeneratorEquipement,
   SteelStan304, SteelStan316, WaterInvesemetEquipement,
    WaterInvesemetSystem,DODInkJetDescription,
DODInkJetImages,
CIJInkJetDescription,
CIJInkJetImages,
TIJInkJetDescription,
TIJInkJetImages,
LaserMarkingInkJetDescription,
LaserMarkingInkJetImages
)

class RotaryScrewCompressorSerializer(serializers.ModelSerializer):
    class Meta:
        model = RotaryScrewCompressor
        fields = '__all__'

class ReciprocatingCompressorSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReciprocatingCompressor
        fields = '__all__'

class ScrollCompressorSerializer(serializers.ModelSerializer):
    class Meta:
        model = ScrollCompressor
        fields = '__all__'

class TurboCompressorSerializer(serializers.ModelSerializer):
    class Meta:
        model = TurboCompressor
        fields = '__all__'

class AirDryerEquipementSerializer(serializers.ModelSerializer):
    class Meta:
        model = AirDryerEquipement
        fields = '__all__'

class FilterEquipementSerializer(serializers.ModelSerializer):
    class Meta:
        model = FilterEquipement
        fields = '__all__'

class AirReceiverEquipementSerializer(serializers.ModelSerializer):
    class Meta:
        model = AirReceiverEquipement
        fields = '__all__'

class NitrogenGeneratorEquipementSerializer(serializers.ModelSerializer):
    class Meta:
        model = NitrogenGeneratorEquipement
        fields = '__all__'


# class DODInkJetSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = DODInkJet
#         fields = '__all__'

# class CIJInkJetSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = CIJInkJet
#         fields = '__all__'

# class TIJInkJetSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = TIJInkJet
#         fields = '__all__'

# class LaserMarkingInkJetSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = LaserMarkingInkJet
#         fields = '__all__'


class SteelStan304Serializer(serializers.ModelSerializer):
    class Meta:
        model = SteelStan304
        fields = '__all__'
class SteelStan316Serializer(serializers.ModelSerializer):
    class Meta:
        model = SteelStan316
        fields = '__all__'
        




class WaterInvesemetEquipementSerializer(serializers.ModelSerializer):
    class Meta:
        model = WaterInvesemetEquipement
        fields = '__all__'

class WaterInvesemetSystemSerializer(serializers.ModelSerializer):
    class Meta:
        model = WaterInvesemetSystem
        fields = '__all__'





class DODInkJetDescriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = DODInkJetDescription
        fields = '__all__'

class DODInkJetImagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = DODInkJetImages
        fields = '__all__'

class CIJInkJetDescriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = CIJInkJetDescription
        fields = '__all__'

class CIJInkJetImagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = CIJInkJetImages
        fields = '__all__'

class TIJInkJetDescriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = TIJInkJetDescription
        fields = '__all__'

class TIJInkJetImagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = TIJInkJetImages
        fields = '__all__'

class LaserMarkingInkJetDescriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = LaserMarkingInkJetDescription
        fields = '__all__'

class LaserMarkingInkJetImagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = LaserMarkingInkJetImages
        fields = '__all__'












DODInkJetDescription
DODInkJetImages
CIJInkJetDescription
CIJInkJetImages
TIJInkJetDescription
TIJInkJetImages
LaserMarkingInkJetDescription
LaserMarkingInkJetImages
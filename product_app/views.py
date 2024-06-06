from rest_framework import viewsets
from .models import (
    RotaryScrewCompressor, ReciprocatingCompressor, ScrollCompressor, TurboCompressor,
    AirDryerEquipement, FilterEquipement, AirReceiverEquipement, NitrogenGeneratorEquipement,
    SteelStan304, SteelStan316, WaterInvesemetEquipement,
    WaterInvesemetSystem,
    DODInkJetDescription,
    DODInkJetImages,
    CIJInkJetDescription,
    CIJInkJetImages,
    TIJInkJetDescription,
    TIJInkJetImages,
    LaserMarkingInkJetDescription,
    LaserMarkingInkJetImages,

)
from .serializers import (
    RotaryScrewCompressorSerializer, ReciprocatingCompressorSerializer, ScrollCompressorSerializer,
    TurboCompressorSerializer, AirDryerEquipementSerializer, FilterEquipementSerializer,
    AirReceiverEquipementSerializer, NitrogenGeneratorEquipementSerializer,
    SteelStan304Serializer, SteelStan316Serializer,
    WaterInvesemetEquipementSerializer, WaterInvesemetSystemSerializer,
    DODInkJetDescriptionSerializer,
DODInkJetImagesSerializer,
CIJInkJetDescriptionSerializer,
CIJInkJetImagesSerializer,
TIJInkJetDescriptionSerializer,
TIJInkJetImagesSerializer,
LaserMarkingInkJetImagesSerializer,
LaserMarkingInkJetDescriptionSerializer,
)

class RotaryScrewCompressorViewSet(viewsets.ModelViewSet):
    queryset = RotaryScrewCompressor.objects.all()
    serializer_class = RotaryScrewCompressorSerializer
    allowed_methods = ['GET', 'POST']  # Only allow GET and POST requests   

class ReciprocatingCompressorViewSet(viewsets.ModelViewSet):
    queryset = ReciprocatingCompressor.objects.all()
    serializer_class = ReciprocatingCompressorSerializer

class ScrollCompressorViewSet(viewsets.ModelViewSet):
    queryset = ScrollCompressor.objects.all()
    serializer_class = ScrollCompressorSerializer

class TurboCompressorViewSet(viewsets.ModelViewSet):
    queryset = TurboCompressor.objects.all()
    serializer_class = TurboCompressorSerializer

class AirDryerEquipementViewSet(viewsets.ModelViewSet):
    queryset = AirDryerEquipement.objects.all()
    serializer_class = AirDryerEquipementSerializer

class FilterEquipementViewSet(viewsets.ModelViewSet):
    queryset = FilterEquipement.objects.all()
    serializer_class = FilterEquipementSerializer

class AirReceiverEquipementViewSet(viewsets.ModelViewSet):
    queryset = AirReceiverEquipement.objects.all()
    serializer_class = AirReceiverEquipementSerializer

class NitrogenGeneratorEquipementViewSet(viewsets.ModelViewSet):
    queryset = NitrogenGeneratorEquipement.objects.all()
    serializer_class = NitrogenGeneratorEquipementSerializer


# class DODInkJetViewSet(viewsets.ModelViewSet):
#     queryset = DODInkJet.objects.all()
#     serializer_class = DODInkJetSerializer

# class CIJInkJetViewSet(viewsets.ModelViewSet):
#     queryset = CIJInkJet.objects.all()
#     serializer_class = CIJInkJetSerializer

# class TIJInkJetViewSet(viewsets.ModelViewSet):
#     queryset = TIJInkJet.objects.all()
#     serializer_class = TIJInkJetSerializer

# class LaserMarkingInkJetViewSet(viewsets.ModelViewSet):
#     queryset = LaserMarkingInkJet.objects.all()
#     serializer_class = LaserMarkingInkJetSerializer



class SteelStan304ViewSet(viewsets.ModelViewSet):
    queryset = SteelStan304.objects.all()
    serializer_class = SteelStan304Serializer

class SteelStan316ViewSet(viewsets.ModelViewSet):
    queryset = SteelStan316.objects.all()
    serializer_class = SteelStan316Serializer

class WaterInvesemetEquipementViewSet(viewsets.ModelViewSet):
    queryset = WaterInvesemetEquipement.objects.all()
    serializer_class = WaterInvesemetEquipementSerializer

class WaterInvesemetSystemViewSet(viewsets.ModelViewSet):
    queryset = WaterInvesemetSystem.objects.all()
    serializer_class = WaterInvesemetSystemSerializer





class DODInkJetDescriptionViewSet(viewsets.ModelViewSet):
    queryset = DODInkJetDescription.objects.all()
    serializer_class = DODInkJetDescriptionSerializer

class DODInkJetImagesViewSet(viewsets.ModelViewSet):
    queryset = DODInkJetImages.objects.all()
    serializer_class = DODInkJetImagesSerializer

class CIJInkJetDescriptionViewSet(viewsets.ModelViewSet):
    queryset = CIJInkJetDescription.objects.all()
    serializer_class = CIJInkJetDescriptionSerializer

class CIJInkJetImagesViewSet(viewsets.ModelViewSet):
    queryset = CIJInkJetImages.objects.all()
    serializer_class = CIJInkJetImagesSerializer

class TIJInkJetDescriptionViewSet(viewsets.ModelViewSet):
    queryset = TIJInkJetDescription.objects.all()
    serializer_class = TIJInkJetDescriptionSerializer

class TIJInkJetImagesViewSet(viewsets.ModelViewSet):
    queryset = TIJInkJetImages.objects.all()
    serializer_class = TIJInkJetImagesSerializer

class LaserMarkingInkJetDescriptionViewSet(viewsets.ModelViewSet):
    queryset = LaserMarkingInkJetDescription.objects.all()
    serializer_class = LaserMarkingInkJetDescriptionSerializer

class LaserMarkingInkJetImagesViewSet(viewsets.ModelViewSet):
    queryset = LaserMarkingInkJetImages.objects.all()
    serializer_class = LaserMarkingInkJetImagesSerializer





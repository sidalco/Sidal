from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    RotaryScrewCompressorViewSet, ReciprocatingCompressorViewSet, ScrollCompressorViewSet,
    TurboCompressorViewSet, AirDryerEquipementViewSet, FilterEquipementViewSet,
    AirReceiverEquipementViewSet, NitrogenGeneratorEquipementViewSet, 
    SteelStan304ViewSet, SteelStan316ViewSet,
    WaterInvesemetEquipementViewSet, WaterInvesemetSystemViewSet,
    DODInkJetDescriptionViewSet,
    DODInkJetImagesViewSet,
    CIJInkJetDescriptionViewSet,
    CIJInkJetImagesViewSet,
    TIJInkJetDescriptionViewSet,
    TIJInkJetImagesViewSet,
    LaserMarkingInkJetDescriptionViewSet,
    LaserMarkingInkJetImagesViewSet,
)

router = DefaultRouter()
router.register(r'rotary-screw-compressors', RotaryScrewCompressorViewSet)
router.register(r'reciprocating-compressors', ReciprocatingCompressorViewSet)
router.register(r'scroll-compressors', ScrollCompressorViewSet)
router.register(r'turbo-compressors', TurboCompressorViewSet)
router.register(r'air-dryer-equipements', AirDryerEquipementViewSet)
router.register(r'filter-equipements', FilterEquipementViewSet)
router.register(r'air-receiver-equipements', AirReceiverEquipementViewSet)
router.register(r'nitrogen-generator-equipements', NitrogenGeneratorEquipementViewSet)

# router.register(r'dod-inkjets', DODInkJetViewSet)
# router.register(r'cij-inkjets', CIJInkJetViewSet)
# router.register(r'tij-inkjets', TIJInkJetViewSet)
# router.register(r'laser-marking-inkjets', LaserMarkingInkJetViewSet)

router.register(r'steel-304', SteelStan304ViewSet)
router.register(r'steel-316', SteelStan316ViewSet)
router.register(r'water-invesemet-equipements', WaterInvesemetEquipementViewSet)
router.register(r'water-invesemet-systems', WaterInvesemetSystemViewSet)

router.register(r'DODInkJet-Description', DODInkJetDescriptionViewSet)
router.register(r'DODInkJet-Images', DODInkJetImagesViewSet)
router.register(r'CIJInkJet-Description', CIJInkJetDescriptionViewSet)
router.register(r'CIJInkJet-Images', CIJInkJetImagesViewSet)
router.register(r'TIJInkJet-Description', TIJInkJetDescriptionViewSet)
router.register(r'TIJInkJet-Images', TIJInkJetImagesViewSet)
router.register(r'LaserMarkingInkJet-Description', LaserMarkingInkJetDescriptionViewSet)
router.register(r'LaserMarkingInkJet-Images', LaserMarkingInkJetImagesViewSet)


urlpatterns = [
    path('', include(router.urls)),
]




# from django.urls import path 
# from .views import *

# urlpatterns = [
#     path('', products, name='products'),
#     path('air-compressor/', air_Compressor, name='aircompressor'),
#     path('water-investement/', water_Investement, name='waterinvestement'),
#     path('jet-ink/', jet_Ink, name='jetink'),
#     path('steel-stanless/', steel_Stanless, name='steelstanless'),
#     #path('<int:id>/', product_detail, name='product-detail')
# ]

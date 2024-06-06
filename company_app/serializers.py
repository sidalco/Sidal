from rest_framework import serializers
from .models import LatestNews, OurBranches, OurTechnologies, Catalogue

class LatestNewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = LatestNews
        fields = '__all__'

class OurBranchesSerializer(serializers.ModelSerializer):
    class Meta:
        model = OurBranches
        fields = '__all__'

class OurTechnologiesSerializer(serializers.ModelSerializer):
    class Meta:
        model = OurTechnologies
        fields = '__all__'

class CatalogueSerializer(serializers.ModelSerializer):
    class Meta:
        model = Catalogue
        fields = '__all__'




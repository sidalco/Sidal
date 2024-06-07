# Generated by Django 4.2.7 on 2023-12-11 05:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product_app', '0024_alter_cijinkjet_type_alter_dodinkjet_type_and_more'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='waterinvesemetsystem',
            options={'ordering': ['name'], 'verbose_name': 'Water Invesemet System'},
        ),
        migrations.AlterField(
            model_name='cijinkjet',
            name='type',
            field=models.CharField(choices=[('KGK', 'KGK'), ('videojet', 'videojet')], max_length=50),
        ),
        migrations.AlterField(
            model_name='dodinkjet',
            name='type',
            field=models.CharField(choices=[('EVO', 'EVO'), ('bicolor', 'bicolor'), ('p2128', 'p2128')], max_length=50),
        ),
        migrations.AlterField(
            model_name='lasermarkinginkjet',
            name='type',
            field=models.CharField(choices=[('co2', 'co2'), ('fiber', 'fiber'), ('uv', 'uv')], max_length=50),
        ),
        migrations.AlterField(
            model_name='reciprocatingcompressor',
            name='type',
            field=models.CharField(choices=[('oil_injected', 'oil_injected'), ('oil_free', 'oil_free')], max_length=50),
        ),
        migrations.AlterField(
            model_name='rotaryscrewcompressor',
            name='type',
            field=models.CharField(choices=[('oil_injected', 'oil_injected'), ('oil_free', 'oil_free')], max_length=50),
        ),
    ]

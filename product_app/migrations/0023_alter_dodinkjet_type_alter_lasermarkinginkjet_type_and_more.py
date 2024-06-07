# Generated by Django 4.2.7 on 2023-11-24 22:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product_app', '0022_alter_cijinkjet_type_alter_lasermarkinginkjet_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='dodinkjet',
            name='type',
            field=models.CharField(choices=[('EVO', 'EVO'), ('p2128', 'p2128'), ('bicolor', 'bicolor')], max_length=50),
        ),
        migrations.AlterField(
            model_name='lasermarkinginkjet',
            name='type',
            field=models.CharField(choices=[('fiber', 'fiber'), ('co2', 'co2'), ('uv', 'uv')], max_length=50),
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
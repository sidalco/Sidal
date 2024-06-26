# Generated by Django 4.2.7 on 2024-06-02 07:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product_app', '0040_alter_dodinkjet_type_alter_lasermarkinginkjet_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='lasermarkinginkjet',
            name='type',
            field=models.CharField(choices=[('fiber', 'fiber'), ('co2', 'co2'), ('uv', 'uv')], max_length=50),
        ),
        migrations.AlterField(
            model_name='reciprocatingcompressor',
            name='type',
            field=models.CharField(choices=[('Oil Injected', 'Oil Injected'), ('Oil Free', 'Oil Free')], max_length=50),
        ),
    ]

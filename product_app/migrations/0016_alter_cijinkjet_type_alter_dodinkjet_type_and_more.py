# Generated by Django 4.2.7 on 2023-11-24 22:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product_app', '0015_alter_cijinkjet_type_alter_dodinkjet_type_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cijinkjet',
            name='type',
            field=models.CharField(choices=[('KGK', 'KGK'), ('videojet', 'videojet')], max_length=50),
        ),
        migrations.AlterField(
            model_name='dodinkjet',
            name='type',
            field=models.CharField(choices=[('p2128', 'p2128'), ('bicolor', 'bicolor'), ('EVO', 'EVO')], max_length=50),
        ),
        migrations.AlterField(
            model_name='lasermarkinginkjet',
            name='type',
            field=models.CharField(choices=[('fiber', 'fiber'), ('co2', 'co2'), ('uv', 'uv')], max_length=50),
        ),
    ]
